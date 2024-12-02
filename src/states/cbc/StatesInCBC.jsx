import { Component } from "react";

class StatesInCBC extends Component {
    state = { count: 0}; //initializing state

    increment = () => {
        this.setState ({ count: this.state.count+1 })
    };
    decrement = () => {
        if(this.state.count>0)
        this.setState ({ count: this.state.count-1})
    };
    reset = () => {
        this.setState ({ count:0})
    };



    render() {
        console.log(this);

        return (
            <div>
                <h1>Staes in Class Based</h1>
                <h2>
                    Counter <mark>{this.state.count}</mark>
                </h2>

                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
export default StatesInCBC;