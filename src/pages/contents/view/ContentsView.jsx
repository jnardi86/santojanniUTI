import { useModulos } from "../../../hooks/useModulos"
import { useHome } from "../../home/view/useHome"
import ContentsDescription from "../components/descripcion/ContentsDescription"
import ContentsAvailable from "../components/disponibilidad/ContentsAvailable"
import ContentsHero from "../components/hero/ContentsHero"
import ContentsSpeakers from "../components/oradores/ContentsSpeakers"
import ContentsQuizz from "../components/quizz/ContentsQuizz"
import ContentsVideo from "../components/videos/ContentsVideo"
import React, { useEffect } from 'react';


const ContentsView = () => {

  const { getModuleDataLocalStorage, setModuleData } = useModulos();
  const { handleRenderModulo, } = useHome();

  useEffect(() => {

    //Rutina para leer el ModuleId del Local Storage y setear moduleData
    const { moduleId } = getModuleDataLocalStorage();
    handleRenderModulo(moduleId, setModuleData)

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional smooth scrolling behavior
      });
    };

    // Call scrollToTop when component mounts
    scrollToTop();

    // Optionally, if you want to scroll to top when component unmounts
    return () => {
      scrollToTop();
    };

  }, []);


  return (
    <>
      <ContentsHero />
      <ContentsDescription />
      <ContentsAvailable />
      <ContentsSpeakers />
      <ContentsVideo />
      <ContentsQuizz />

    </>


  )
}

export default ContentsView