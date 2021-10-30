import { ethers, BigNumber } from "ethers";
import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { getToken, Token} from "../lib/tokenLists";
import { TokenSymbol } from "./TokenSymbol";
import styles from "../styles/Position.module.css";

interface PositionProps {
    address: string
    quantity: BigNumber,
    tokens: Token[],
}

export const Position = (props: PositionProps): JSX.Element => {
    const {address, quantity, tokens} = props;

    return (
        <ListGroupItem key={address} className={styles.row}>
            <TokenSymbol address={address} token={getToken(tokens, address)} />
            <div>{ethers.utils.commify(ethers.utils.formatEther(quantity)).substring(0, 8)}</div>
        </ListGroupItem>
    )
}
