import './Square.css'
import React from "react";

const square = props => (
    <button className="square">
        {props.value}
    </button>
)

export default square