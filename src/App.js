import React from 'react'

import ExampleComponent from './components/ExampleComponent'

import GoodluckComponent from './components/GoodluckComponent'

import FruitBasket from './components/FruitBasket'

export default function App() {
    return (
        <div>
            {/* <ExampleComponent robynsProps={false} /> */}
            {/* <GoodluckComponent /> */}
            <FruitBasket pablosFavoriteFruit="pablo's watermelons" />
        </div>
    )
}


