import React from 'react'
import { useModulos } from "../../../../hooks/useModulos";

const MobileContent = () => {
    const { moduleData } = useModulos();

    return (
        <div className="heroContainer relative w-full overflow-hidden mb-20">
            <img src={moduleData.imageMobile} alt={moduleData.title} className="w-full h-full object-cover" />
            <p className='absolute font-poppins font-bold text-Blue text-[50px] w-[250px] bottom-[30%] right-[10%] 
            tablet:top-[20%] tablet:left-auto right-[10%]
            desktop:text-[40px] desktop:w-[300px]
            text-end'>Roemmers</p>
        </div>
    )
}

export default MobileContent
