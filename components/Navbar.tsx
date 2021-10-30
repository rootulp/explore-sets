import { getChainName, getExplorerAddressLink, shortenAddress } from "@usedapp/core"
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core"
import { injectedConnector } from "../lib/connector"
import {Button, Container, Navbar as BootstrapNavbar} from "react-bootstrap";
import React from "react";
import { NoEthereumProviderError, UserRejectedRequestError } from "@web3-react/injected-connector";

export const Navbar = (): JSX.Element => {
    const { active, account, chainId, activate, deactivate, error } = useWeb3React()

    async function connect() {
        try {
            await activate(injectedConnector)
        } catch (e) {
            console.error(e)
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (e) {
            console.log(e)
        }
    }

    const errorText = error && (
      <BootstrapNavbar.Text>{getErrorMessage(error)}</BootstrapNavbar.Text>
    )

    const signedInWithText = account && chainId && (
      <BootstrapNavbar.Text>
        Signed in with: <a href={getExplorerAddressLink(account, chainId)}>{shortenAddress(account)}</a> on {getChainName(chainId)}
      </BootstrapNavbar.Text>
    )

    return (
      <BootstrapNavbar fixed="top" variant="dark" bg="dark">
        <Container>
          <BootstrapNavbar.Brand>Explore Sets</BootstrapNavbar.Brand>
          {signedInWithText}
          {errorText}
            {active ? (
              <Button onClick={disconnect} variant="secondary">
                Disconnect
              </Button>
            ) : (
              <Button  onClick={connect} variant="primary">
                Connect
              </Button>
            )}
          </Container>
      </BootstrapNavbar>
    )
}

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (error instanceof UserRejectedRequestError) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}
