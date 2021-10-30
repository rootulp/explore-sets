import { shortenAddress } from "@usedapp/core";
import Image from "next/image";
import { BigNumber, ethers } from "ethers";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import useSWR from "swr";
import { Token, TokenListsResponse, TOKEN_LISTS_API } from "../lib/tokenLists";
import styles from "../styles/Position.module.css"

interface PositionProps {
    address: string
    quantity: BigNumber,
    tokens: Token[],
}

export const Position = (props: PositionProps): JSX.Element => {
    const {address, quantity, tokens} = props;
    const token = tokens?.filter(t => t.address === props.address)[0]

    return (
        <ListGroupItem key={address} className={styles.row}>
            <TokenSymbol address={address} token={token} />
            <div>{ethers.utils.commify(ethers.utils.formatEther(quantity)).substring(0, 8)}</div>
        </ListGroupItem>
    )
}

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
