import { useModulos } from "../../../../hooks/useModulos"


const ContentsDescription = () => {

  const { description } = useModulos()

  return (
    <div>{description}</div>
    
  )
}

export default ContentsDescription