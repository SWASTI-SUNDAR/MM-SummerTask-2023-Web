import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Error from "./components/Error";
import Fetchdata from "./components/Fetchdata";
import ImprovrdNavbar from "./components/ImprovedNavbar"
function App() {
  return (
    <>
    
    <Navbar/>
    <Routes>
        <Route index path="/" element={<Fetchdata cat="general"/>} />
        <Route  path="home" element={<Fetchdata cat="general"/>} />
        <Route path="sports" element={<Fetchdata cat="sports"/>} />
        <Route path="general" element={<Fetchdata cat="bitcoin"/>} />
        <Route path="health" element={<Fetchdata cat="health"/>} />
        <Route path="technology" element={<Fetchdata cat="technology"/>} />
        <Route path="entertainment" element={<Fetchdata cat="entertainment"/>} />
        <Route path="science" element={<Fetchdata cat="science"/>} />
        <Route path="fashion" element={<Fetchdata cat="fashion"/>} />
        <Route path="business" element={<Fetchdata cat="business"/>} />
        <Route path="*" Component={Error} />
      </Routes>
      <div />
    </>
  );
}

export default App;
