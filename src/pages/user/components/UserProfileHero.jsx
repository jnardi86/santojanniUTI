import React from 'react'
import { useModulos } from '../../../hooks/useModulos'

import heroImgDesktop from '/Images_figma/banner_home_desktop_max_sin_logo.png'
import heroImgMobile from '/Images_figma/banner_home_mobile_max.png'

const UserProfileHero = () => {

    const { desktopView } = useModulos() 

  return (
    <div className='w-full relative mb-20'>
    <img className="w-full" src={desktopView ? heroImgDesktop : heroImgMobile} alt="Hero Image" />
    <h1 className='absolute font-poppins font-medium text-Blue text-4xl w-full text-center top-[70%]
    tablet:top-[72px] tablet:pr-4 tablet:text-end laptop1:font-semiBold laptop1:text-[52px] laptop1: desktop:pr-8'>
        ¡Bienvenido!
    </h1>
</div>
  )
}

export default UserProfileHero