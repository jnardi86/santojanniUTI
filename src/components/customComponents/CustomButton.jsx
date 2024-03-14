import React from 'react'

const CustomButton = ({ onClick, label }) => {
    return (
        <button
            className='py-1 px-1 bg-White hover:bg-Green text-white font-semibold rounded-md'
            onClick={onClick}
            type="button"
        >
            {label}
        </button>
    )
}

export default CustomButton