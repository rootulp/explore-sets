import { shortenAddress } from "@usedapp/core";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React from "react";
import { ListGroupItem, Placeholder } from "react-bootstrap";
import useSWR from "swr";
import { Token, TokenListsResponse, TOKEN_LISTS_API } from "../lib/tokenLists";
import styles from "../styles/Position.module.css"

interface PositionProps {
    address: string
    quantity: BigNumber,
}

export const Position = (props: PositionProps): JSX.Element => {
    const {address, quantity} = props;
    const { data } = useSWR(TOKEN_LISTS_API, fetcher)
    const token = data?.filter(t => t.address === props.address)[0]

    return (
        <ListGroupItem key={address} className={styles.row}>
            <TokenSymbol address={address} token={token} />
            <div>{ethers.utils.commify(ethers.utils.formatEther(quantity))}</div>
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
        return <div>{token.symbol}</div>
    }
    return <div>{shortenAddress(address)}</div>
}

async function fetcher (url: string): Promise<Token[]> {
    return fetch(url).then(r => {
        return r.json().then((result: TokenListsResponse) => {
            return result.tokens
        })
    })
}
