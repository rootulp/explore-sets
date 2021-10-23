import { ethers } from "ethers";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import React from "react"
import Home from "."
import styles from '../styles/Home.module.css'
import { BaseProvider } from "@ethersproject/providers";


const network = "kovan";
const alchemyToken = process.env.ALCHEMY_KOVAN_TOKEN;

const provider: BaseProvider = ethers.getDefaultProvider(network, {
  alchemy: alchemyToken,
});

interface HomeProps {
  blockNumber: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blockNumber = await provider.getBlockNumber();
  return {
    props: {
      blockNumber,
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
          <a href="https://nextjs.org/docs" className={styles.card}>
            {props.blockNumber}
          </a>
        </div>
      </main>
    </div>
  )
}

export default Sets
