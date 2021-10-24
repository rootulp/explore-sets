import { ChainId, getExplorerAddressLink } from "@usedapp/core"
import { ethers } from "@usedapp/core/node_modules/ethers"
import { BigNumber } from "ethers"
import React from "react"
import { Position } from "set.js/dist/types/src/types"
import useSWR from "swr"
import styles from "../styles/Home.module.css"
import { useCoingeckoToken } from "./useCoingeckoToken"

interface SetCardProps {
    name: string,
    symbol: string,
    positions: Position[],
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    return (
        <div key={props.symbol} className={styles.card}>
            <div className={styles.cardHeader}>
                <p className={styles.cardName}>{props.name}</p>
                <p className={styles.symbol}>{props.symbol}</p>
            </div>
            Positions
            {props.positions.map(position => <PositionComponent address={position.component} quantity={position.unit} />)}
        </div>
    )
}

interface PositionComponentProps {
    address: string,
    quantity: BigNumber,
}

const PositionComponent = (props: PositionComponentProps): JSX.Element => {
    // TODO(@rootulp) stop hard-coding chainId
    const { token, isLoading, isError } = useCoingeckoToken(1, props.address);
    const link = getExplorerAddressLink(props.address, ChainId.Mainnet)

    if (isLoading){
        return (<div key={props.address}>Loading</div>)
    }
    if (isError){
        return (<div key={props.address}>Error</div>)
    }
    return (
        <div key={props.address}><a href={link}>{token.name}</a>: {ethers.utils.formatEther(props.quantity)}</div>
    )
}
