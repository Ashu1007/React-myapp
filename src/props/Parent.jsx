import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
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
        
        </div>
    );
};

export default Parent;
