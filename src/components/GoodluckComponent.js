import React, { useState } from 'react'

import './GoodluckComponent.css'

export default function GoodluckComponent() {
    const [position, setPosition] = useState(
        {
            top: 0,
            left: 0
        }
    )

    const handleClick = () => {
        const randomPosition = {
            top: Math.floor(Math.random() * window.innerHeight),
            left: Math.floor(Math.random() * window.innerWidth)
        }

        setPosition(randomPosition)
    }

    return (
        <div className='button-container' >
            <button
                className='moving-button'
                style={position}
                onClick={handleClick}
            >Catch Me!</button>
        </div >
    )
}
