import NavbarCBC from "./components/NavbarCBC";
import Navbar from "./components/Navbar"; 
import States from "./states/fbc/States";
import Counter from "./states/fbc/Counter";
import StatesInCBC from "./states/cbc/StatesInCBC";
import Parent from "./props/Parent";

const App = () => {
    return(
        <div>
            {/* {<Navbar></Navbar>
            <NavbarCBC/>} */}


        <h1>Hello, This is component</h1>
        {/*<States/>} */}
        {/*   <Counter/> */}
            {/* <StatesInCBC/> */}
            <Parent/>
        </div>
    );
};
export default App;