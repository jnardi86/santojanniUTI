import LogoRoemers from "../../../../components/svg/LogoRoemers"
import { useModulos } from "../../../../hooks/useModulos"

const ContentsHero = () => {

  const { title, imageMobile, imageDesktop } = useModulos()


  return (
    <div className="heroContainer relative w-full h-screen overflow-hidden border-solid border-2 border-Blue">
      <div className="heroContainer-image absolute inset-0 w-full h-full">
        <picture>
          {/* Define the source for larger screens */}
          <source media="(min-width:550px)" srcSet={`${imageDesktop}`} />
          {/* Default image source */}
          <img src={`${imageMobile}`} alt="Sepsis"/>
        </picture>
      </div>
      <div className="heroContainer-title absolute w-full top-3/4 flex justify-center">
        {/* <h1 className="font-poppins font-bold text-3xl">Laboratorio Sepsis</h1> */}
        <LogoRoemers
          color='#011C40'
          width='280'
          height='38'
        />
      </div>
    </div>
  )
}

export default ContentsHero
