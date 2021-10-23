import WalletConnectProvider from '@walletconnect/web3-provider'
import Set from "set.js";
import { providers } from 'ethers'
import Head from 'next/head'
import { useCallback, useEffect, useReducer } from 'react'
import Web3Modal from 'web3modal'
import { ellipseAddress, getChainData } from '../lib/utilities'
import {SetList} from "../lib/setList"


const infuraToken = process.env.INFURA_TOKEN;
console.log("infuraToken", infuraToken);

const alchemyToken = process.env.ALCHEMY_KOVAN_TOKEN;
console.log("alchemyToken", alchemyToken);

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      // TODO(@rootulp): this HACKHACK WalletConnect isn't working b/c it claims
      // this environment variable isn't provided
      infuraId: process.env.INFURA_TOKEN,
    },
  },
}

let web3Modal: Web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

type StateType = {
  provider?: any
  web3Provider?: providers.Web3Provider
  address?: string
  chainId?: number
}

type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

const initialState: StateType = {
  provider: undefined,
  web3Provider: undefined,
  address: undefined,
  chainId: undefined,
}


function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

export const Home = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId } = state

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const network = await web3Provider.getNetwork()
    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged);
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const chainData = getChainData(chainId)

  return (
    <div className="container">
      <Head>
        <title>Explore Sets</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
        <link href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css" rel="stylesheet" />
        <link href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css" rel="stylesheet" />
      </Head>

      <header>
        <div className="grid">
          <div>
            <p>Network: {chainData?.name}</p>
            <p>Address: {ellipseAddress(address)}</p>
          </div>
          <div>
            {web3Provider ? (
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

    {chainId && web3Provider && <SetList chainId={chainId} provider={web3Provider} />}

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

        .grid {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
        }

        .button {
          padding: 1rem;
          background: ${web3Provider ? 'grey' : 'blue'};
          border: none;
          color: #fff;
          font-size: 1rem;
        }
      `}</style>

    </div>
  )
}

export default Home
