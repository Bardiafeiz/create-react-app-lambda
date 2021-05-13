import './Game.css'
import React from "react";
import Board from "../Board/Board";

const game = props => (
    <div className="game">
        <div className="game-board">
            <Board data={props.data}/>
        </div>
    </div>

)

export default game