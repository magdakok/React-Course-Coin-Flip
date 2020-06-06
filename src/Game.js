import React, {Component} from "react";
import Coin from "./Coin";

class Game extends Component {
    render(){
        return (
            <div className="Game">
                <Coin side="back" />
            </div>
        )
    }
}

export default Game;