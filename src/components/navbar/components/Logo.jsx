import React from 'react'
import LogoUti from '../../svg/LogoUti'

const Logo = () => {
  return (
      <div className='flex p-[5px]'>
        <p className='text-White font-poppins text-4xl font-semiBold'>UT</p>
        <span className=''>
          <LogoUti
            width="14"
            height="40"
          />
        </span>
      </div>
  )
}

export default Logo
