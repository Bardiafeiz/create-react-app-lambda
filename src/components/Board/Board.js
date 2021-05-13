import './Board.css'
import React from "react";
import Square from "../Square/Square";

const boardRow = (props, counter) => {
    let row = []
    for (let i = 0; i < 8; i++) {
        row.push(<Square value={props.data[counter+i]} key={i}/>)
    }
    return row
}

const boardBody = props => {
    let body = []
    let counter = 0
    for (let i = 0; i < 8; i++) {
        body.push(
            <div className="board-row" key={i}>
                {boardRow(props, counter)}
            </div>
        )
        counter += 8
    }
    return body
}

const board = props => (
    <div>
        <div>
            {boardBody(props)}
        </div>

    </div>
)

export default board