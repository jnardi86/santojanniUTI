import { useModulos } from "../../../../hooks/useModulos"
// import imageMobile from "../../../../assets/Images_figma/header_sepsis_mobile_max.png"



const ContentsHero = () => {

  const { title, imageMobile } = useModulos()
  console.log("title del state is: ", title)
  console.log("La url de imageMobile es: ", imageMobile)


  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageMobile})`}}></div>
      <h1>ContentsHero</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ContentsHero