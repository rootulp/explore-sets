import { ethers } from "ethers";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import React from "react"
import styles from '../styles/Home.module.css'
import { BaseProvider } from "@ethersproject/providers";
import Set from "set.js";
import { initializeSet } from "../lib/setJsApi";

const network = "kovan";
const alchemyToken = process.env.ALCHEMY_KOVAN_TOKEN;
console.log("alchemyToken", alchemyToken);

const provider: BaseProvider = ethers.getDefaultProvider(network, {
  alchemy: alchemyToken,
});

const set: Set = initializeSet(network, provider);

interface HomeProps {
  blockNumber: string
  setAddresses: string[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blockNumber = await provider.getBlockNumber();
  const setAddresses = await set.system.getSetsAsync();
  return {
    props: {
      blockNumber,
      setAddresses,
    },
  }
}

const Sets: NextPage<HomeProps> = (props: HomeProps) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sets</title>
        <meta name="description" content="Sets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sets
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            The current block on {network} is {props.blockNumber}
          </div>

          <div className={styles.card}>
            The current set addresses {props.setAddresses}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Sets
