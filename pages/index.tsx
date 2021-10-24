import Head from 'next/head'
import {SetList} from "../components/SetList"
import React from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/index.module.css"

const infuraToken = process.env.INFURA_TOKEN;
console.log("infuraToken", infuraToken);

const alchemyToken = process.env.ALCHEMY_KOVAN_TOKEN;
console.log("alchemyToken", alchemyToken);

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
