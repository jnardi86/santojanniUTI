import React from 'react'
import { useModulos } from "../../../../hooks/useModulos";

const DesktopContent = () => {
    const { moduleData } = useModulos();

  return (
    <div className="heroContainer relative w-full overflow-hidden mb-10">
      <img src={moduleData.imageDesktop} alt={moduleData.title} className=""/>
      <p className='absolute font-poppins font-bold text-Blue text-[50px] w-[250px] bottom-[10%] right-[10%] 
            tablet:top-[20%] tablet:left-auto right-[10%]
            desktop:text-[50px] desktop:w-[300px]
            text-end'>{moduleData.title}</p>
    </div>
  )
}

export default DesktopContent
