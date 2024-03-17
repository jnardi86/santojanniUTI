import React from "react";
import HomeHero from "./components/hero/HomeHero";
import HomeVideo from "./components/video/HomeVideo";
import HomeAbout from "./components/aboutUTI/HomeAbout";
import HomeOradores from "./components/oradores/HomeOradores";
import HomeCursosParte1 from "./components/primeraEtapa/HomeCursosParte1";
import HomeCursosParte2 from "./components/segundaEtapa/HomeCursosParte2";
import HomeColaboradores from "./components/colaboradores/HomeColaboradores";


const HomeView = () => {



  return (
    <>
      <HomeHero />
      <HomeVideo />
      <HomeAbout />
      <HomeOradores />
      <HomeCursosParte1/>
      <HomeCursosParte2 />
      <HomeColaboradores />
    </>


  )
}

export default HomeView