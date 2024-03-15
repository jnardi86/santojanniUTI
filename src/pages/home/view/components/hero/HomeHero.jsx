import React from 'react'
import heroImg from '../../../../../assets/Images_figma/banner_home_desktop_max.png'

const HomeHero = () => {
    return (
        <div className='container mx-auto relative'>
            {/* Image */}
            <div className='w-full'>
                <img className="w-full" src={heroImg} alt="Footer Image" />
            </div>

            <p>HomeHero</p>
        </div>
    )
}

export default HomeHero
