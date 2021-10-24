import { getChainName, shortenAddress } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../lib/connector"
import styles from "../styles/Navbar.module.css"
import {Button, Container, Navbar as BootstrapNavbar} from "react-bootstrap";
import React from "react";

export const Navbar = (): JSX.Element => {
    const { active, account, chainId, activate, deactivate } = useWeb3React()

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
    return (
      <BootstrapNavbar fixed="top" variant="dark" bg="dark">
        <Container>
          <BootstrapNavbar.Brand>Explore Sets</BootstrapNavbar.Brand>
          {account && chainId && (<BootstrapNavbar.Text>
            Signed in with: {shortenAddress(account)} on {getChainName(chainId)}
          </BootstrapNavbar.Text>)}
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
