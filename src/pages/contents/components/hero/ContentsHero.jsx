import { useModulos } from "../../../../hooks/useModulos"


const ContentsHero = () => {

  const { title } = useModulos()
  console.log("title del state is: ", title)


  return (
    <div>
      <h1>ContentsHero</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ContentsHero