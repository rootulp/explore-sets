import { Position, SetDetails } from "set.js/dist/types/src/types"

interface SetCardProps {
    name: string,
    symbol: string,
    positions: Position[],
}

export const SetCard = (props: SetCardProps): JSX.Element => {
    return (
        <div key={props.symbol}>
            Name: {props.name}
            Symbol: {props.symbol}
            Positions length: {props.positions?.length}
        </div>
    )
}
