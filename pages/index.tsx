import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Explore Sets</title>
        <meta name="description" content="Explore Sets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="sets">Explore Sets</Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
