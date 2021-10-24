import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import { Position } from "set.js/dist/types/src/types"
import {Position as PositionComponent} from "./Position"
import styles from "../styles/SetCard.module.css"

interface SetCardProps {
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
