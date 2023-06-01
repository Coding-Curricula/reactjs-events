import React, { useState } from 'react'

export default function ExampleComponent({ robynsProps }) {
  const [clicked, setClicked] = useState(robynsProps)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div>
      <p>Example Component!!!</p>
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  )
}
