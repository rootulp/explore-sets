import Head from 'next/head'
import {SetList} from "../lib/SetList"
import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.css"

export const Home = (): JSX.Element => {
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
