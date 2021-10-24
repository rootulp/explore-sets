import Head from 'next/head'
import Error from 'next/error'
import {SetList} from "../components/SetList"
import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.css"

interface HomeProps {
  errorCode: any;
}

export const Home = (props: HomeProps): JSX.Element => {
  if (props.errorCode) {
    return <Error statusCode={props.errorCode} />
  }

  return (
    <div className={styles.home}>
      <Head>
        <title>Explore Sets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SetList />
    </div>
  )
}

export default Home
