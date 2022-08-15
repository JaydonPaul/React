import React from "react";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick() {
        console.log("Changed")
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Changed!</button>
            </div>
        )
    }
}

export default App