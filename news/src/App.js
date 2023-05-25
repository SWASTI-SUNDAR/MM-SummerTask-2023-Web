import Navbar from "./components/Navbar";
import Newsbody from "./components/Newsbody";
import Trial2 from "./components/Trial2";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Swasti from "./components/Swasti";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" Component={Trial2} />
        <Route exact path="/news" Component={Newsbody} />
        <Route path="*" Component={Error} />
      </Routes>
      <div />
    </>
  );
}

export default App;
