import { useModulos } from "../../../../hooks/useModulos"


const ContentsHero = () => {

  const { title } = useModulos()

  return (
    <div>
      <h1>ContentsHero</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ContentsHero