import { useModulos } from "../../../../hooks/useModulos"
import imageSepsisMobile from "../../../../assets/Images_figma/header_sepsis_mobile_max.png"



const ContentsHero = () => {

  const { title, imageMobile } = useModulos()
  // console.log("title del state is: ", title)
  // console.log("La url de imageMobile es: ", imageMobile)
  console.log("console imagemobile", imageMobile)


  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" >
      {/* <div className="container mx-auto  inset-0 h-96 bg-cover bg-center"> */}
        <img src={`${imageMobile}`} alt="" />
        <p>En este div esta la uimagen en background</p>
      </div>
      {/* <div>
        <img src={imageSepsisMobile} alt="" />
      </div> */}
      <h1>ContentsHero</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ContentsHero