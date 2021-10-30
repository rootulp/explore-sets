import { ethers } from "ethers";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Token} from "../lib/tokenLists";
import { TokenSymbol } from "./TokenSymbol";
import styles from "../styles/Position.module.css";

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
