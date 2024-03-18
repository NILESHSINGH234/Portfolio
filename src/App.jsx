import AOS from "aos";
import "aos/dist/aos.css"
import './App.css'
import  { useEffect } from 'react';
import Skills from "./Pages/Skills";

import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { extendTheme } from "@chakra-ui/react";
import Certificate from "./Pages/Certificate";
import Projects from "./Pages/Projects";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#2f3030",
        color: "white",
      },
    },
  },
});
function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <div className=" min-h-screen relative">
     
    <ChakraProvider theme={theme}>   
    <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
          <Route path="/skill" element={<Skills></Skills>}></Route>
          <Route path="/certi" element={<Certificate></Certificate>}></Route>
          <Route path="/project" element={<Projects></Projects>}></Route>
          </Routes>
    <Footer></Footer>
    </ChakraProvider> 
    
    </div>
    </>
  )
}

export default App
