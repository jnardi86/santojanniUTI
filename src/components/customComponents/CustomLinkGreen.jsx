import React from 'react'
import { Link } from "react-router-dom"

const CustomLink = ({ linkTo, label }) => {
    return (
        <Link to={linkTo}
            className='py-2 px-3 bg-Green text-White hover:bg-White hover:text-Green font-semibold rounded-md'>
            {label}
        </Link>
    )
}

export default CustomLink
