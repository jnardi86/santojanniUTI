import { useModulos } from "../../../../hooks/useModulos"

const ContentsHero = () => {

  const { moduleData } = useModulos()


  return (
    <div className="heroContainer relative w-full overflow-hidden mb-20">
      <img src={moduleData.imageMobile} alt={moduleData.title} className="w-full h-full object-cover border-solid tablet:hidden" />
      <img src={moduleData.imageDesktop} alt={moduleData.title} className="hidden tablet:block"/>
    </div>
  )
}

export default ContentsHero
