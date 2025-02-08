import React from 'react'

const CustomButton = ({ type, onClick, label, style  }) => {

    const customStyle = `py-1 px-5 bg-White font-poppins text-Blue rounded-l-full rounded-r-full hover:bg-Green font-semibold rounded-md`
    
    return (
        <button
            className={`${style ? style : customStyle }`}
            onClick={onClick}
            type={type}
        >
            {label}
        </button>
    )
}

export default CustomButton