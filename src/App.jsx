import NavbarCBC from "./components/NavbarCBC";
import Navbar from "./components/Navbar"; 
import States from "./states/fbc/States";
import Counter from "./states/fbc/Counter";

const App = () => {
    return(
        <div>
            {/* {<Navbar></Navbar>
            <NavbarCBC/>} */}


        <h1>Hello, This is component</h1>
        {/*<States/>} */}
            <Counter/>
        </div>
    );
};
export default App;