import { useState } from "react";

const States =() => {
    //console.log(useState());//[undefined,f]
    let [state, setState] =useState("Hello");
    let [cart, setCart] =useState("add to cart")
    console.log(state);
    //console.log(cart);

    function update() {
        console.log("btn clicked");
        setState("Byee");
    }

    return(
        <div>
            <h1>States in FBC {state}</h1>
            <button onClick={update} >Click</button>
            <button onClick={()=>{setCart("go to cart")}}>{cart}</button>
        </div>
    );
};
export default States;