import React from 'react'
import footerImg from '../../../assets/Images_figma/footer_desktop_max.png'


const Footer = () => {
    return (
        <div className='container max-w-[1440px] mx-auto relative'>

            {/* Image */}
            <div className='w-full'>
                <img className="w-full" src={footerImg} alt="Footer Image" />
            </div>

            {/* Footer content */}
            <div
                className='absolute bottom-0 left-0 
                w-full h-full 
                px-10 py-5
                text-White 
                flex flex-col justify-evenly items-end'>
                <div>
                    <p>Pilar 950 CABA</p>
                    <p>4630-5500</p>
                    <p>ciclocharlasuti@gmail.com</p>
                </div>
                <div>
                    <p>Desarrollo El Hornero DN</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
