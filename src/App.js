import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Premium from "./components/Premium";
import OurClients from "./components/OurClients";
import Video from "./components/Video";
import Footer from "./components/Footer";
import "./styles.css";
const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <FeaturedProducts />
    <Premium />
    <OurClients />
    <Video />
    <Footer />
  </>
);

export default App;
