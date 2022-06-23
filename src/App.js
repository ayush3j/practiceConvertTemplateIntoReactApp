import React from "react";
import NavBar from "./Navbar";
import Head from "./Head";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from"./Footer";

import "./styles.css";


const App = () => {
    return(
        <div>
            <NavBar />
            <Head />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}
export default App;