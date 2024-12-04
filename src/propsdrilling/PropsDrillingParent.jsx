import React from 'react'
import Child1 from './Child1'

const PropsDrillingParent =()=> {
    let user = [
        { id: 1, ename: "John"},
        { id: 2, ename: "Doe"},
    ];
  return (
    <div>
        <Child1 data={user} />
    </div>
  );
};

export default PropsDrillingParent;