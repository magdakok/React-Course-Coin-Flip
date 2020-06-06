import React, {Component} from "react";
import front from "./front.png";
import back from "./back.png";


class Coin extends Component {
    render(){
        return (
            <div className="Coin">
                { this.props.side==="front" ? <img src={front}/> : <img src={back}/>}
            </div>
        )
    }
}

export default Coin;