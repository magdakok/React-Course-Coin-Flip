import React, {Component} from "react";
import front from "./front.png";
import back from "./back.png";
import "./Coin.css";


class Coin extends Component {
    render(){
        return (
            <div className="Coin">
                <div className={this.props.rotate ? `Coin-side Coin-side-front animation-front` : `Coin-side Coin-side-front`}>
                    { this.props.side==="front" ? <img src={front}/> : <img src={back}/>}
                </div>

                <div className={this.props.rotate ? `Coin-side Coin-side-back animation-back` : `Coin-side Coin-side-back`}>
                { this.props.side==="back" ? <img src={front}/> : <img src={back}/>}
                </div>
            </div>
        )
    }
}

export default Coin;