import useData from "../../useData"
import ContentsDescription from "../components/descripcion/ContentsDescription"
import ContentsAvailable from "../components/disponibilidad/ContentsAvailable"
import ContentsHero from "../components/hero/ContentsHero"
import ContentsSpeakers from "../components/oradores/ContentsSpeakers"
import ContentsQuizz from "../components/quizz/ContentsQuizz"
import ContentsVideo from "../components/videos/ContentsVideo"


const ContentsView = () => {

  const {
    pageContents
  } = useData()


  return (
    <>
    <ContentsHero/>
    <ContentsDescription/>
    <ContentsAvailable/>
    <ContentsSpeakers/>
    <ContentsVideo/>
    <ContentsQuizz/>
    
    </>
    
    
  )
}

export default ContentsView