'use client'
import Nav from "./components/Navigation/Nav";
import Image from "next/image";
import styles from "./page.module.css";
import Herosection from "./components/HeroSection/Herosection";
import Slider from "./components/Heroslider/Slider";
import Insight from "./components/Insight/Insight";
import Aboutus from "./components/AboutUs/Aboutus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

export default function Home() {
 
  return (
    <div  className="bg-[#F1FaFF] min-h-screen">
      <Nav />
      <Herosection />
      <Slider />
      <Insight />
      <Aboutus />
      <Contact />
      <Footer />
    </div>
  );
}
