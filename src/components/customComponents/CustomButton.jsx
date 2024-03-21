import React from 'react'

const CustomButton = ({ onClick, label }) => {
    return (
        <button
            className='py-1 px-5 bg-White text-Blue rounded-l-full rounded-r-full hover:bg-Green text-white font-semibold rounded-md'
            onClick={onClick}
            type="button"
        >
            {label}
        </button>
    )
}

export default CustomButton