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
    const { data, error } = useSWR(TOKEN_LISTS_API, fetcher)
    const token = data?.filter(t => t.address === props.address)[0]
    console.log(token)

    return (
        <ListGroupItem key={props.address} className={styles.row}>
            <div>{error ? "Error" : token === undefined ? <Placeholder xs={6} animation="glow" />: token.symbol}</div>
            <div>{ethers.utils.commify(ethers.utils.formatEther(props.quantity))}</div>
        </ListGroupItem>
    )
}

async function fetcher (url: string): Promise<Token[]> {
    return fetch(url).then(r => {
        return r.json().then((result: TokenListsResponse) => {
            return result.tokens
        })
    })
}
