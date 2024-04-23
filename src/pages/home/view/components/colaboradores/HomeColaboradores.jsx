import React from 'react'
import Medicar from "../../../../../assets/colaboradores/Medicar.png"
import Roemmers from "../../../../../assets/colaboradores/Roemmers.svg"
import Biol from "../../../../../assets/colaboradores/Biol.png"

const HomeColaboradores = () => {
    return (
        <div className="colaboradoresContainer w-full h-auto flex-column justify-center content-center mb-20">
            <div className="colaboradoresContainerHeader w-full h-auto text-center p-2 mb-12">
                <h1 className="font-poppins font-medium text-Blue text-[52px]">Nos acompañan</h1>
            </div>
            <div className="bg-DarkGreen py-5 flex justify-center items-center flex-wrap">
                <img className="px-5 py-5 mx-10 mobile:w-[200px] laptop1:w-[300px] " src={Roemmers} alt="Roemmers" />
                <img className="px-5 py-5 mx-10 mobile:w-[200px] laptop1:w-[250px] h-[150px]" src={Biol} alt="Roemmers" />
                <img className="px-5 py-5 mx-10 mobile:w-[200px] laptop1:w-[220px] h-[160px]" src={Medicar} alt="Roemmers" />
            </div>
            <div className="bg-Cyan h-[50px] flex justify-center flex-wrap">

            </div>
        </div>
    )
}

export default HomeColaboradores
