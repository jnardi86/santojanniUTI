import { useModulos } from "../../../../hooks/useModulos"


const ContentsDescription = () => {

  const { moduleData } = useModulos()

  return (
    <div className="descriptionContainer w-full h-auto flex-column justify-center content-center mb-20 p-2 laptop1:px-20">
      <div className="descriptionContainerHeader w-full h-auto text-center p-2 mb-12 laptop1:text-start">
        <h1 className="font-poppins font-medium text-Blue text-[52px]">{moduleData.title}</h1>
      </div>
      <div className="descriptionContainerBody w-full h-auto p-2 text-start">
        <p className="font-poppins font-regular text-Blue text-base">{moduleData.description}</p>
      </div>
    </div>

  )
}

export default ContentsDescription