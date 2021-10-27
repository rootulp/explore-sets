import { getExplorerAddressLink } from "@usedapp/core";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { useCoingeckoToken } from "../lib/useCoingeckoToken";
import styles from "../styles/Position.module.css"

interface PositionProps {
    address: string
    quantity: BigNumber,
}

export const Position = (props: PositionProps): JSX.Element => {
    const {chainId} = useWeb3React();
    const { token, isLoading, isError } = useCoingeckoToken(props.address, chainId);

    if (isLoading){
        return (<ListGroupItem key={props.address}>Loading</ListGroupItem>)
    }
    if (isError){
        return ( <ListGroupItem key={props.address}>Error</ListGroupItem>)
    }
    return (
        <ListGroupItem key={props.address} className={styles.row}>
            <div>{token.symbol.toUpperCase()}</div>
            <div>{ethers.utils.commify(ethers.utils.formatEther(props.quantity))}</div>
        </ListGroupItem>
    )
}
