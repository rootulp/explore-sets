import { getChainName, shortenAddress } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../lib/connector"
import styles from "../styles/Navbar.module.css"

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
      <header>
        <div className={styles.navbar}>
          <div>
            <div>Network: {chainId && getChainName(chainId)}</div>
            <div>Address: {account && shortenAddress(account)}</div>
          </div>
          <div>
            {active ? (
              <button className={styles.disconnectButton} type="button" onClick={disconnect}>
                Disconnect
              </button>
            ) : (
              <button className={styles.connectButton} type="button" onClick={connect}>
                Connect
              </button>
            )}
          </div>
        </div>
      </header>
    )
}
