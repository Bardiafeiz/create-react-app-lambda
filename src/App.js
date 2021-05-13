import React from "react";
import axios from 'axios'
import './App.css';
import Game from "./components/Game/Game";
import sleep from "./Assistants/Sleep";

class App extends React.Component {

    state = {
        response: {},
        currentBoardState: [],
        inputsShow: true,
    }

    async updateBoard(response) {
        for(let key in response){
            await sleep(1000)
            let currentBoardState = response[key]
            console.log(currentBoardState)
            this.setState({currentBoardState: currentBoardState})
        }
    }

    get = () => {
        let data
        axios.get('http://localhost:8000/')
            .then(res => {
                data = res.data
                this.setState({
                    response: data
                })
                let response = {...this.state.response}
                this.updateBoard(response)
            })
            .catch(err => {
            })
    }

    solveButtClicked = () => {
        // Hide the inputs
        this.setState({inputsShow: false})

        this.get()
    }

    render() {
        return (
            <div className="App">
                <div className="status">8 Queens Problem</div>
                <div>
                    <button className="btn-hover color-2" onClick={this.solveButtClicked} hidden={!this.state.inputsShow}> Solve!</button>
                </div>
                <div className="App">
                    <Game data={this.state.currentBoardState}/>
                </div>
            </div>
        );
    }
}

export default App;
