import React from 'react'

const FooterDesktop = ({
  footerImageDesktop,
  Location,
  infoLocation,
  Phone,
  infoContact,
  Email,
  infoEmail,
  InfoWeb }) => {

  return (
    <div className='w-full h-auto flex relative'>
            <img src={footerImageDesktop} alt="Footer Image" className='w-full h-full' />
            <div className='w-full h-auto absolute top-1/4 pr-2 flex justify-end laptop1:pr-4 laptop2:pr-6 desktop:pr-16'>
                <ul className='text-White font-poppins text-xs font-semiBold laptop2:text-base'>
                    <li className='flex items-center gap-1 mb-1 desktop:gap-2'>
                        {
                            Location &&
                            <span>
                                <Location
                                    width={'36'}
                                    height={'36'}
                                    color={'#FAFAFA'}
                                />
                            </span>
                        }

                        <p>{infoLocation}</p>
                    </li>
                    <li className='flex items-center gap-1 mb-2'>
                        {
                            Phone &&
                            <span>
                                <Phone
                                    width={'36'}
                                    height={'36'}
                                    color={'#FAFAFA'}
                                />
                            </span>
                        }

                        <p>{infoContact}</p>
                    </li>
                    <li className='flex items-center gap-1 mb-2'>
                        {
                            Email &&
                            <span>
                                <Email
                                    width={'36'}
                                    height={'36'}
                                    color={'#FAFAFA'}
                                />
                            </span>
                        }

                        <p>{infoEmail}</p>
                    </li>
                </ul>
            </div>
            <div className='w-full absolute top-[90%] text-center'>
                <p className='text-White font-poppins text-xs font-regular laptop2:text-base'>{InfoWeb}</p>
            </div>
        </div>
  )
}

export default FooterDesktop