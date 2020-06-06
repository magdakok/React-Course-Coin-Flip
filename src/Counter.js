import React, {Component} from "react";

class Counter extends Component {
    render(){
        return (
            <div className="Counter">
                <p>Out of {this.props.front+this.props.back} flips, there have been {this.props.front} heads and {this.props.back} tails.</p>
            </div>
        )
    }
}

export default Counter;