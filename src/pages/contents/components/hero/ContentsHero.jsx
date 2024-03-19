import { useModulos } from "../../../../hooks/useModulos"

const ContentsHero = () => {

  const { title, imageMobile, imageDesktop } = useModulos()


  return (
    <div className="heroContainer relative w-screen h-screen overflow-hidden">

      <picture>
        {/* Define the source for larger screens */}
        <source media="(min-width:450px)" srcSet={`${imageDesktop}`} />
        {/* Default image source */}
        <img src={`${imageMobile}`} alt="Flowers" style={{ width: 'auto' }} />
      </picture>


    </div>
  )
}

export default ContentsHero
