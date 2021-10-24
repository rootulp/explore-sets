import React from "react"
import { Card, ListGroup, Placeholder } from "react-bootstrap"
import { Position } from "set.js/dist/types/src/types"
import {Position as PositionComponent} from "./Position"
import styles from "../styles/SetCard.module.css"
import { useCoingeckoToken } from "../lib/useCoingeckoToken"
import { useWeb3React } from "@web3-react/core"

interface SetCardProps {
    address: string,
    name: string,
    symbol: string,
    positions: Position[],
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    return (
        <Card className={styles.card}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.symbol}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.positions.map(position => <PositionComponent address={position.component} quantity={position.unit} key={position.component} />)}
            </ListGroup>
        </Card>
    )
}

interface LoadingSetCardProps {
    index: number
}
export const LoadingSetCard = (props: LoadingSetCardProps): JSX.Element => {
    return (
        <Card className={styles.card} key={props.index}>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />
                </Placeholder>
            </Card.Body>
        </Card>
    )

}
