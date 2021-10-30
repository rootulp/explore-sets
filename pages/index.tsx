import Head from 'next/head'
import Error from 'next/error'
import {SetList} from "../components/SetList"
import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.css"
import { Token, TokenListsResponse, TOKEN_LISTS_API } from "../lib/tokenLists";

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
  const ret = await fetch(TOKEN_LISTS_API)
  const result: TokenListsResponse = await ret.json()
  const tokens = result.tokens

  return {
      props: {
          tokens,
      }
  }
}

export default Home
