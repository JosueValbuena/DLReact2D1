import React from 'react'

export const Card = ({ product }) => {
    return (
        <div className='card'>
            <img src={product.src} alt="" />
            <p>{product.nombre}</p>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
        </div>
    )
}
