import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";

const Parent = () => {
    let [state,setState]= useState("Parent");


    let data = [10,20,30,40];
    let user ={id: 1, ename: "john"};

    function Display() {
        console.log("I am display Function");
    }
    return (
        <div>
            <h3>Props Parent</h3>
            <ChildA propVal ={{data,user}} />

            <ChildB fun= {Display }/>

            <hr></hr>

            <ChildC setterFun ={setState}/>
            {state}
        
        </div>
    );
};

export default Parent;
