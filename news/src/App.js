import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Mainheader from "./components/Mainheader";
import Sports from "./components/Sports";
import General from "./components/General";
import Health from "./components/Health";
import Entertainment from "./components/Entertainment";
import Education from "./components/Education";
import World from "./components/World";
import Science from "./components/Science";
import Fashion from "./components/Fashion";
import Error from "./components/Error";
import Bussiness from "./components/Politics";
import Search from "./components/Search";
function App() {
    return (
    <>
      <Routes>
         <Route  path="/" Component={Mainheader}/>
         <Route  index  path="home" Component={Home}/>
         <Route  path="sports" Component={Sports}/>
         <Route  path="general" Component={General}/>
         <Route  path="health" Component={Health}/>
         <Route  path="entertainment" Component={Entertainment}/>
         <Route  path="education" Component={Education}/>
         <Route  path="world" Component={World}/>
         <Route  path="science" Component={Science}/>
         <Route  path="fashion" Component={Fashion}/>
         <Route  path="bussiness" Component={Bussiness}/>
         <Route  path="*" Component={Error}/>
      </Routes>
      <div />
    </>
  );
}

export default App;
