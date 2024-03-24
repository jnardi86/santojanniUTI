import React from 'react'

const CustomButton = ({ type, onClick, label, style  }) => {

    const customStyle = `py-1 px-5 bg-White text-Blue rounded-l-full rounded-r-full hover:bg-Green text-white font-semibold rounded-md ${style}`
    
    return (
        <button
            className={customStyle}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}

export default CustomButton