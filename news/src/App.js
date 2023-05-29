import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Error from "./components/Error";
import Fetchdata from "./components/Fetchdata";
import ImprovrdNavbar from "./components/ImprovedNavbar"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const[darkMode,setDarkMode]=useState(false)
  const darkTheme = createTheme({
    palette: {
      mode:darkMode?'dark':'light',
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline>
    <Navbar check={darkMode} change={()=>setDarkMode(!darkMode)}  />
    <Routes>
    <Route index path="/" element={<Fetchdata cat="" name="Get Your Daily Dose Of News" />} />
    <Route  path="home" element={<Fetchdata cat="general" name="Home" />} />
    <Route path="sports" element={<Fetchdata cat="sports" name="Sports"/>} />
    <Route path="general" element={<Fetchdata cat="bitcoin" name="Crypto"/>} />
    <Route path="health" element={<Fetchdata cat="health" name="Health & Food"/>} />
    <Route path="technology" element={<Fetchdata cat="technology" name="Technology"/>} />
    <Route path="entertainment" element={<Fetchdata cat="entertainment" name="Entertainment" />} />
    <Route path="science" element={<Fetchdata cat="science" name="Science" />} />
    <Route path="fashion" element={<Fetchdata cat="fashion" name="Fashion & Beauty" />} />
    <Route path="business" element={<Fetchdata cat="business" name="Business"/>} />
    <Route path="*" Component={Error} />
    </Routes>
    <Footer/>
    </CssBaseline>
    </ThemeProvider>
    </>
  );
}

export default App;
