import { useModulos } from "../../../../hooks/useModulos"

const ContentsHero = () => {

  const { title, imageMobile, imageDesktop } = useModulos()


  return (
    <div className="heroContainer relative w-full overflow-hidden">
      <img src={imageMobile} alt={title} className="w-full h-full object-cover border-solid tablet:hidden" />
      <img src={imageDesktop} alt={title} className="hidden tablet:block"/>
    </div>
  )
}

export default ContentsHero
