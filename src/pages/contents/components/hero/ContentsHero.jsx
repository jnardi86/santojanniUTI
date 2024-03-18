import { useModulos } from "../../../../hooks/useModulos"

const ContentsHero = () => {

  const { title, imageMobile } = useModulos()


  return (
    <div className="heroContainer relative w-screen h-screen overflow-hidden">
      <picture>
        <source media="(max-width: 375px)" src={imageMobile} />
      </picture>
      

    </div>
  )
}

export default ContentsHero


      {/* <div className="absolute inset-0 bg-cover bg-center" >

        <img src={`${imageMobile}`} alt="" />
        <p>En este div esta la uimagen en background</p>
      </div>

      <h1>ContentsHero</h1>
      <h2>{title}</h2>
     */}