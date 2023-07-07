import React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Header/NavBar";
import Services from "./components/Services/Services";
import Kitchendesign from "./components/Services/Ktchen design/Kitchendesign";
import Bedroomdesign from "./components/Services/Bedroom design/Bedroomdesign";
import Form from './components/Form/Form';
import Storage from "./components/Services/Storage/Storage";
import Bathroom from "./components/Services/Bathroom/Bathroom";
import Poojaunit from "./components/Services/Poojaunit/Poojaunit";
import How from "./components/How/How";

function Routing() {



  const Main = () =>{
    return(
        <>
            <Home />
            <About />
            
            <Services />
            <How />
            <Form />
            
            
        </>
    );
}
  return (
    <>
      <Router>
        <NavBar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* services */}
            <Route path="/kitchen-design" element={<Kitchendesign />} />
            <Route path="/bedroom-design" element={<Bedroomdesign />} />
            <Route path="/storage" element={<Storage />} />
            <Route path="/bathroom" element={<Bathroom />} />
            <Route path="/pooja-unit" element={<Poojaunit />} />
            <Route path="/bedroom-design" element={<Bedroomdesign />} />


          </Routes>
        <Footer />
      </Router>
  </>
  );
}

export default Routing;
