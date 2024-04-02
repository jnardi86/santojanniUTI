import React from 'react'

const HamburguerClose = ({ width, height, color }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Close" clipPath="url(#clip0_119_3015)">
                <rect width="48" height="48" fill="#011C40" />
                <path id="Vector" d="M38 12.82L35.18 10L24 21.18L12.82 10L10 12.82L21.18 24L10 35.18L12.82 38L24 26.82L35.18 38L38 35.18L26.82 24L38 12.82Z" fill="#FAFAFA" />
            </g>
            <defs>
                <clipPath id="clip0_119_3015">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default HamburguerClose