const ChildC =({ setterFun })=> {
    let data = "hello react";
    return (
        <div>
            <h3>I am ChildC</h3>
            <button onClick={() => setterFun(data)}>Send to parent</button>
        </div>
    );
};

export default ChildC;