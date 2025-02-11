import React from 'react'

const Hamburger = ({ width, height, color }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Menu" clipPath="url(#clip0_118_1399)">
                <rect width="48" height="48" fill="#011C40" />
                <path id="Vector" d="M6 36H42V32H6V36ZM6 26H42V22H6V26ZM6 12V16H42V12H6Z" fill="#FAFAFA" />
            </g>
            <defs>
                <clipPath id="clip0_118_1399">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Hamburger