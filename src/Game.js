import React, {Component} from "react";
import Coin from "./Coin";
import Counter from "./Counter";

class Game extends Component {
    render(){
        return (
            <div className="Game">
                <Coin side="back" />
                <Counter />
            </div>
        )
    }
}

export default Game;