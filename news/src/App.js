import Navbar from "./components/Navbar";
import Newsbody from "./components/Newsbody";
import Trial2 from "./components/Trial2";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Error from "./components/Error";
function App() {
  return (
    <>
    <div>
    <Navbar/>
    </div>
    <Routes>
    <Route exact path="/" Component={Trial2}/>
    <Route exact path="/news" Component={Newsbody}/>
    <Route path="*" Component={Error}/>
    </Routes>
   </>
  );
}

export default App;
