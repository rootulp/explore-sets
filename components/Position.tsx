import { shortenAddress } from "@usedapp/core";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import React from "react";
import { ListGroupItem, Placeholder } from "react-bootstrap";
import { useCoingeckoToken } from "../lib/useCoingeckoToken";
import styles from "../styles/Position.module.css"

interface PositionProps {
    address: string
    quantity: BigNumber,
}

export const Position = (props: PositionProps): JSX.Element => {
    const {chainId} = useWeb3React();
    const { token, isLoading } = useCoingeckoToken(props.address, chainId);

    if (isLoading){
        return (<ListGroupItem key={props.address}>
            <Placeholder xs={6} animation="glow" />
            <Placeholder xs={6} animation="glow" />
        </ListGroupItem>)
    }
    return (
        <ListGroupItem key={props.address} className={styles.row}>
            <div>{token.symbol ? token.symbol.toUpperCase() : shortenAddress(props.address)}</div>
            <div>{ethers.utils.commify(ethers.utils.formatEther(props.quantity))}</div>
        </ListGroupItem>
    )
}
