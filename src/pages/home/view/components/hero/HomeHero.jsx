import React from 'react'
import heroImgDesktop from '/Images_figma/banner_home_desktop_max_sin_logo.png'
import heroImgMobile from '/Images_figma/banner_home_mobile_max.png'
import { useModulos } from '../../../../../hooks/useModulos'

const HomeHero = () => {
    const { desktopView } = useModulos()

    return (
        <div className='w-full relative mb-20'>
            <img className="w-full" src={desktopView ? heroImgDesktop : heroImgMobile} alt="Hero Image" />
            <p className='absolute font-poppins font-bold text-Blue text-[50px] w-[250px] bottom-[12%] right-[10%] 
            tablet:top-[20%] tablet:left-auto desktop:text-[40px] desktop:w-[300px] text-end'>
                Ciclo de charlas 2024
            </p>
        </div>

    )
}

export default HomeHero
