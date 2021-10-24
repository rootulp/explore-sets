import { getChainName, getExplorerAddressLink, shortenAddress, useLookupAddress } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../lib/connector"
import {Button, Container, Navbar as BootstrapNavbar} from "react-bootstrap";
import React from "react";

export const Navbar = (): JSX.Element => {
    const { active, account, chainId, activate, deactivate } = useWeb3React()
    const ens = useLookupAddress();

    async function connect() {
        try {
            await activate(injected)
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

    const signedInWithText = account && chainId && (
      <BootstrapNavbar.Text>
        Signed in with: <a href={getExplorerAddressLink(account, chainId)}>{ens ?? shortenAddress(account)}</a> on {getChainName(chainId)}
      </BootstrapNavbar.Text>
    )

    return (
      <BootstrapNavbar fixed="top" variant="dark" bg="dark">
        <Container>
          <BootstrapNavbar.Brand>Explore Sets</BootstrapNavbar.Brand>
          {signedInWithText}
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
