import React from "react"
import { Position } from "set.js/dist/types/src/types"
import styles from "../styles/Home.module.css"
import {Position as PositionComponent} from "./Position"

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
            {props.positions.map(position => <PositionComponent address={position.component} quantity={position.unit} key={position.component} />)}
        </div>
    )
}
