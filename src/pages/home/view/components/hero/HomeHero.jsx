import React from 'react'
import heroImgDesktop from '../../../../../assets/Images_figma/banner_home_desktop_max.png'
import heroImgMobile from '../../../../../assets/Images_figma/banner_home_mobile_max.png'
import { useModulos } from '../../../../../hooks/useModulos'

const HomeHero = () => {
    const { desktopView } = useModulos()

    return (
        <div className='w-full relative mb-20'>
            <img className="w-full" src={desktopView ? heroImgDesktop : heroImgMobile} alt="Hero Image" />
            <p className='absolute font-poppins font-medium text-Blue text-[30px] w-[250px] bottom-[20%] left-[10%] 
            tablet:top-[20%] left-auto right-[10%]
            desktop:text-[40px] w-[300px]'>
                Bienvenidos al ciclo de charlas 2024!
            </p>
        </div>

    )
}

export default HomeHero
