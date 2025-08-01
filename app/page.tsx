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
  const [isClient, setIsClient] = useState(false)  
       useEffect(() => {
          // Component has mounted on the client
          setIsClient(true)
          // You can optionally open the modal here if needed
          // setIsOpen(true)
        }, [])
        if (!isClient) return null
  return (
    <div className="bg-[#F1FaFF] min-h-screen">
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
