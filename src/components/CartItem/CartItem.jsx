import React from 'react'

const CartItem = ({ title, artist, quantity, price, image }) => {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{artist}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${price}</p>
            <p>Subtotal {price*quantity} </p>
            <img src={image} alt={title} />
            
        </div>
    )
}

export default CartItem;
