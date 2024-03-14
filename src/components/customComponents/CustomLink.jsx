import React from 'react'
import { Link } from "react-router-dom"

const CustomLink = ({ linkTo, label }) => {
    return (
        <Link to={linkTo}
            className='py-1 px-1 bg-White hover:bg-Green text-white font-semibold rounded-md'>
            {label}
        </Link>
    )
}

export default CustomLink
