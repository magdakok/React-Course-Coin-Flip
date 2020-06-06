import React, {Component} from "react";
import Coin from "./Coin";
import Counter from "./Counter";
import "./Game.css";

class Game extends Component {
    constructor(props){
        super(props);
        this.state = { side: "front", front: 0, back: 0, rotate: false}
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        let option = Math.round(Math.random());
        this.setState({ rotate: true });
        setTimeout(()=>{
            this.setState({ rotate: false });
            if (option === 0) {
                this.setState({ side: "front", front: this.state.front + 1 });
            } else {
                this.setState({ side: "back", back: this.state.back + 1 });
            }
        }, 1000);
    }

    render(){
        return (
            <div className="Game">
                <Coin side={this.state.side} rotate={this.state.rotate} />
                <button onClick={this.clickHandler} disabled={this.state.rotate}>Flip coin</button>
                <Counter front={this.state.front} back={this.state.back}/>
            </div>
        )
    }
}

export default Game;