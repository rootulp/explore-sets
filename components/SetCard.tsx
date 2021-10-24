import React from "react"
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem, Placeholder } from "react-bootstrap"
import { Position } from "set.js/dist/types/src/types"
import {Position as PositionComponent} from "./Position"
import styles from "../styles/SetCard.module.css"
import { propTypes } from "react-bootstrap/esm/Image"
import { getExplorerAddressLink } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"

const NUMBER_OF_POSITIONS_TO_DISPLAY = 3;
interface SetCardProps {
    address: string,
    name: string,
    symbol: string,
    positions: Position[],
}



export const SetCard = (props: SetCardProps): JSX.Element => {
    const {chainId} = useWeb3React();

    const moreText = NUMBER_OF_POSITIONS_TO_DISPLAY < props.positions.length && (
        <ListGroupItem key={props.address}>{props.positions.length - NUMBER_OF_POSITIONS_TO_DISPLAY} more...</ListGroupItem>
    )

    return (
        <Card className={styles.card}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.symbol}</Card.Subtitle>
                <ButtonGroup size="sm">
                    <Button variant="link" href={getTokenSetsUrl(props.symbol)}>TokenSets</Button>
                    {chainId && <Button variant="link" href={getExplorerAddressLink(props.address, chainId)}>Etherscan</Button>}
                </ButtonGroup>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {props.positions.slice(0, NUMBER_OF_POSITIONS_TO_DISPLAY).map(position => <PositionComponent address={position.component} quantity={position.unit} key={position.component} />)}
                {moreText}
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

function getTokenSetsUrl(symbol: string) {
    return `https://www.tokensets.com/portfolio/${symbol.toLowerCase()}`
}
