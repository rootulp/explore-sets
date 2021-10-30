import { Token } from "../lib/tokenLists";
import Image from "next/image";
import styles from "../styles/TokenSymbol.module.css";
import { shortenAddress } from "@usedapp/core";

interface TokenSymbolProps {
    address: string
    token?: Token
}
export const TokenSymbol = (props: TokenSymbolProps): JSX.Element => {
    const {address, token} = props;

    if (token) {
        return <div className={styles.tokenSymbol}>
            <Image src={token.logoURI} width={20} height={20}/>
            <div className={styles.symbol}>{token.symbol}</div>
        </div>
    }
    return <div className={styles.tokenSymbol}>{shortenAddress(address)}</div>
}
