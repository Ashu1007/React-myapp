    // const ChildA = (prop) => {
    //     console.log(prop);

    //     return(
    //         <div>
    //             <h1>{prop.abc}</h1>
    //         </div>
    //     );
    // };
    // export default ChildA;
    import React from "react";

    // const ChildA =(x)=> {
    //     let { abc } =x;
    //     console.log(abc);
    //     return (
    //     <div></div>
    //     )
    // };
    // export default ChildA;
    const ChildA =(x)=> {
        console.log(x); //{propVal:{ data,user}}

        let {propVal :{data, user:{id,ename}}} =x;
        console.log(data,id,ename);

        return (
            <div>
                <h3>Props Child</h3>
            </div>
        )
    }

    export default ChildA;