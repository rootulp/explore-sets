import Head from 'next/head'
import Error from 'next/error'
import {SetList} from "../components/SetList"
import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.css"
import { ONE_INCH_LIST, SET_LIST, Token } from "../lib/tokenLists";

interface HomeProps {
  errorCode: any;
  tokens: Token[];
}

export const Home = (props: HomeProps): JSX.Element => {
  const {errorCode, tokens} = props;

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Explore Sets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SetList tokens={tokens} />
    </div>
  )
}

export async function getStaticProps() {
  const setList = await (await fetch(SET_LIST)).json()
  const oneInchList = await (await fetch(ONE_INCH_LIST)).json()

  return {
      props: {
          tokens: [...setList.tokens, ...oneInchList.tokens]
      }
  }
}

export default Home
