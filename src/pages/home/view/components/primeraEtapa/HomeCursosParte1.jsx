import { useHome } from "../../useHome"
import Card from "../card/Card"

const HomeCursosParte1 = () => {

    const {
        arrayContents,
    } = useHome();


    return (
        <div>
            <p>Primera Etapa</p>
            <div className="flex justify-center">
                {arrayContents.map((module, index) => {
                    return (
                        <Card
                            key={index}
                            data={module}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default HomeCursosParte1