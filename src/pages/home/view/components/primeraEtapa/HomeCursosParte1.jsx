import { useHome } from "../../useHome"
import Card from "../card/Card"


const HomeCursosParte1 = () => {

    const {
        arrayContents,
    } = useHome();


    return (
        <div>
            <p>Primera Etapa</p>
            {arrayContents.map((module, index) => {
                return (
                    <Card
                        key={index}
                        id={module.id}
                        title={module.moduleTitle}
                        description={module.moduleDescription}
                    />
                )
            })}
        </div>
    )
}

export default HomeCursosParte1