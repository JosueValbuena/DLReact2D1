import React from 'react'
import { Card } from '../components/Card'

const Home = ({ products }) => {

    console.log(products)
    return (
        <div className='containerHome'>
            {products.map(ele =>
                <Card product={ele} key={ele.id} />)}
        </div>
    )
}

export default Home