import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
    return <>
        <div class="hero_area">

            <div class="hero_bg_box">
                <div class="bg_img_box">
                    <img src="images/hero-bg.png" alt="" />
                </div>
            </div>
            <Navbar />
            <HomePage />
            
            
        </div>
        <AboutMe />
        <Project />
        <Contact />
        
        <Footer />
    </>
}

