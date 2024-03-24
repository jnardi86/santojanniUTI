import React from 'react'
import Bayer from "../../../../../assets/colaboradores/Bayer.svg"
import Bago from "../../../../../assets/colaboradores/Bago.svg"
import Andromaco from "../../../../../assets/colaboradores/Andromaco.svg"
import Roemmers from "../../../../../assets/colaboradores/Roemmers.svg"

const HomeColaboradores = () => {
    return (
        <div className="colaboradoresContainer w-full h-auto flex-column justify-center content-center mb-20">
            <div className="colaboradoresContainerHeader w-full h-auto text-center p-2 mb-12">
                <h1 className="font-poppins font-medium text-Blue text-[52px]">Nos acompañan</h1>
            </div>
            <div className="bg-DarkGreen py-5 flex justify-center flex-wrap">
                <img className="px-5 py-5" src={Bayer} alt="Bayer" />
                <img className="px-5 py-5" src={Bago} alt="Bago" />
                <img className="px-5 py-5" src={Andromaco} alt="Andromaco" />
                <img className="px-5 py-5" src={Roemmers} alt="Roemmers" />
            </div>
            <div className="bg-Cyan h-[50px] flex justify-center flex-wrap">

            </div>
        </div>
    )
}

export default HomeColaboradores
