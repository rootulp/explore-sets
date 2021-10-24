import { getChainName } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../lib/connector"
import { ellipseAddress } from "../lib/utilities"
import styles from "../styles/Navbar.module.css"

export const Navbar = (): JSX.Element => {
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
      <header>
        <div className={styles.navbar}>
          <div>
            <div>Network: {chainId && getChainName(chainId)}</div>
            <div>Address: {account && ellipseAddress(account)}</div>
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
