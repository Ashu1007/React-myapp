import React , { useState } from "react"

const ControlledForms1 = () => {
    let [username,setUsername]= useState("")
    let [useremail,setUseremail]=useState("")
    let [userpassword,setUserpassword]=useState("")

    let handleUsername = (e) => {
        setUsername(e.target.value);
    }
    let handleUseremail = (e) => {
        setUseremail(e.target.value);
    }
    let handleUserpassword = (e) => {
        setUserpassword(e.target.value);
    }

    let formSubmit = (e) => {
        e.preventDefault();
        console.log({username,useremail,userpassword});
        setUsername("");
        setUseremail("");
        setUserpassword("");
    };


  return (
    <div>
        <h1>Controlled Forms</h1>
        
        <form onSubmit={formSubmit}>
            <label>Name</label>
            <input 
                type="text" 
                value={username} 
                onChange={handleUsername}
                />

            <br></br>
            <label>email</label>
            <input 
                type="email" 
                value={useremail} 
                onChange={handleUseremail}
                />

            <br></br>
            <label>password</label>
            <input 
            type="password" 
            value={userpassword} 
            onChange={handleUserpassword}
            />

            <br></br>
            <button type="submit">submit</button>
        </form>
    </div>
  );
};

export default ControlledForms1;