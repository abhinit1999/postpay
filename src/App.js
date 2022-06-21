import React from "react";
import { Routes,Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
import Error from "./components/Error404";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
