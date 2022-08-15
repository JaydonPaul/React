import React from "react";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.halve = this.halve.bind(this)
    }

    handleClick() {
        this.setState(prevState =>{ 
            return {count: prevState.count +1}
        })
    } 

    halve() {
        this.setState(prevState =>{
            return {count: prevState.count / 2}
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Changed!</button>
                <button onClick={this.halve}>Changed!</button>

            </div>
        )
    }
}

export default App