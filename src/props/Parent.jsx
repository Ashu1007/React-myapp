import ChildA from "./ChildA";

const Parent = () => {
    let data = "Hello World";
    return (
        <div>
            <ChildA abc ={data}/>
        
        </div>
    );
};

export default Parent;