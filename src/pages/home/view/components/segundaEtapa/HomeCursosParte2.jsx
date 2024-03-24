import { useHome } from "../../useHome";
import Card from "../card/Card";

const HomeCursosParte2 = () => {
    const { arrayContents } = useHome();

    const modules = arrayContents.filter((module, index) => index > 3);

    return (
        <div className="modulosContainer w-full h-auto flex-column justify-center content-center mb-20">
            <div className="modulosContainerHeader w-full h-auto text-center p-2 mb-10">
                <h1 className="font-poppins font-medium text-Blue text-[52px]">Segunda etapa</h1>
            </div>
            <div className="flex justify-center flex-wrap">
                {modules.length > 0 ? (
                    modules.map((module, index) => (
                        <Card 
                        key={index} 
                        data={module} />
                    ))
                ) : (
                    <p>Proximamente</p>
                )}
            </div>
        </div>
    );
};

export default HomeCursosParte2;
