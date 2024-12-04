const ChildC =({ setterFun })=> {
    let data = "hello react";
    return (
        <div>
            <h3>I am ChildC</h3>
            <button onClick={() => setterFun(data)}>send to parent</button>
        </div>
    );
};

export default ChildC;