import React, { useState } from 'react'

export default function FruitBasket(props) {
    const [basket, setBasket] = useState([])
    const fruits = ['apples', 'bananas', 'oranges', 'pears', 'grapes', 'mangos', props.pablosFavoriteFruit]

    const handleClick = (fruit) => {
        setBasket([...basket, fruit])
    }

    return (
        <div>
            <h1>Grocery Store</h1>
            {fruits.map((fruit, index) => (
                <button key={index} onClick={() => { handleClick(fruit) }}>Add {fruit}</button>
            ))}
            <h2>My Fruit Basket</h2>
            {basket.length > 0 ? (
                basket.map((fruit, index) => (
                    <p key={index}>{fruit}</p>
                ))
            ) : (
                <p>YOUR BASKET IS EMPTY!!!</p>
            )}
        </div>
    )
}
