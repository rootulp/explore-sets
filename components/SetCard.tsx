import React from "react"
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem, Placeholder } from "react-bootstrap"
import { Position } from "set.js/dist/types/src/types"
import {Position as PositionComponent} from "./Position"
import styles from "../styles/SetCard.module.css"
import { getExplorerAddressLink } from "@usedapp/core"
import { useWeb3React } from "@web3-react/core"
import {Token} from "../lib/tokenLists"

const NUMBER_OF_POSITIONS_TO_DISPLAY = 3;
interface SetCardProps {
    address: string,
    name: string,
    symbol: string,
    positions: Position[],
    tokens: Token[],
}



export const SetCard = (props: SetCardProps): JSX.Element => {
    const {address, name, symbol, positions, tokens} = props;
    const {chainId} = useWeb3React();

    const moreText = NUMBER_OF_POSITIONS_TO_DISPLAY < positions.length && (
        <ListGroupItem key={address}>{positions.length - NUMBER_OF_POSITIONS_TO_DISPLAY} more...</ListGroupItem>
    )

    return (
        <Card className={styles.card}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{symbol}</Card.Subtitle>
                <ButtonGroup size="sm">
                    <Button variant="link" href={getTokenSetsUrl(symbol)}>TokenSets</Button>
                    {chainId && <Button variant="link" href={getExplorerAddressLink(address, chainId)}>Etherscan</Button>}
                </ButtonGroup>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {positions.slice(0, NUMBER_OF_POSITIONS_TO_DISPLAY).map(position => <PositionComponent address={position.component} quantity={position.unit} key={position.component} tokens={tokens}/>)}
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
