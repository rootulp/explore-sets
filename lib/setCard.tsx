import { Card, Elevation } from "@blueprintjs/core"
import React from "react"
import { Position } from "set.js/dist/types/src/types"

interface SetCardProps {
    name: string,
    symbol: string,
    positions: Position[],
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    return (
        <Card key={props.symbol} elevation={Elevation.TWO}>
            <h5>{props.name}</h5>
            <p>Symbol: {props.symbol}</p>
            <p>Positions length: {props.positions?.length}</p>
        </Card>
    )
}
