import React from 'react'
import autoridades from "./autoridades.json"

const homeAbout = () => {
    return (
        <div className="aboutContainer w-full h-auto flex-column justify-center content-center mb-20">
            <div className="aboutContainerHeader w-full h-auto text-center p-2 mb-10">
                <h1 className="font-poppins font-medium text-Blue text-[52px]">Somos UTI</h1>
            </div>
            <div className="aboutContainerBody
            w-[95%]
            py-5
            flex justify-around items-center flex-wrap 
            bg-DarkGreen rounded-r-lg
            shadow-lightShadow
            laptop1:rounded-r-full py-10">
                {autoridades.map((autoridad, index) => {
                    return (
                        <div key={index}
                            className="min-w-[300px] font-poppins font-regular text-White text-base text-center mb-5">
                            <p>{autoridad.cargo} </p>
                            <p className='font-bold'>{autoridad.name}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default homeAbout
