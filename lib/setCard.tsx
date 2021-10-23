import React from "react"
import { Position } from "set.js/dist/types/src/types"
import styles from "../styles/Home.module.css"

interface SetCardProps {
    name: string,
    symbol: string,
    positions: Position[],
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    return (
        <div key={props.symbol} className={styles.card}>
            <h4>{props.name}</h4>
            <p>Symbol: {props.symbol}</p>
            <p>Positions length: {props.positions?.length}</p>
        </div>
    )
}
