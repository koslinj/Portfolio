import React from 'react'

function HamburgerMenu({ isMenuOpen }) {
    return (
        <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="url(#gradient)"
        >
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(232 121 249)" />
                    <stop offset="100%" stopColor="rgb(244 114 182)" />
                </linearGradient>
            </defs>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
        </svg>
    )
}

export default HamburgerMenu