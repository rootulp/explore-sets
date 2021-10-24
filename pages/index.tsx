import Head from 'next/head'
import { ellipseAddress, getChainData } from '../lib/utilities'
import {SetList} from "../components/setList"
import styles from "../styles/Home.module.css"
import { injected } from "../lib/connector";
import { useWeb3React } from "@web3-react/core";
import { getChainName } from "@usedapp/core";


const infuraToken = process.env.INFURA_TOKEN;
console.log("infuraToken", infuraToken);

const alchemyToken = process.env.ALCHEMY_KOVAN_TOKEN;
console.log("alchemyToken", alchemyToken);

export const Home = (): JSX.Element => {
  const { active, account, chainId, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Explore Sets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className={styles.navbar}>
          <div>
            <div>Network: {chainId && getChainName(chainId)}</div>
            <div>Address: {account && ellipseAddress(account)}</div>
          </div>
          <div>
            {active ? (
              <button className="button" type="button" onClick={disconnect}>
                Disconnect
              </button>
            ) : (
              <button className="button" type="button" onClick={connect}>
                Connect
              </button>
            )}
          </div>
        </div>
      </header>

    <SetList />

      <style jsx>{`
        main {
          padding: 5rem 0;
          text-align: center;
        }

        .container {
          padding: 2rem;
          margin: 0 auto;
          max-width: 1200px;
        }

        .button {
          padding: 1rem;
          background: ${active ? 'grey' : 'blue'};
          border: none;
          color: #fff;
          font-size: 1rem;
        }
      `}</style>

    </div>
  )
}

export default Home
