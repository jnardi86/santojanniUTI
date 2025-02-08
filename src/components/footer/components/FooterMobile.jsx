import React from 'react'


const FooterMobile = ({
    footerImageMobile,
    Location,
    infoLocation,
    Phone,
    infoContact,
    Email,
    infoEmail,
    InfoWeb }) => {

    return (
        <div className='w-full h-auto flex flex-col relative'>
            <img src={footerImageMobile} alt="Footer Image" className='w-full h-full' />
            <div className='w-full h-auto absolute top-1/2 pt-2 flex justify-center'>
                <ul className='text-White font-poppins text-xs font-medium'>
                    <li className='flex items-center gap-1 mb-2'>
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
                <p className='text-White font-poppins text-xs font-regular'>{InfoWeb}</p>
            </div>
        </div>
    )
}

export default FooterMobile