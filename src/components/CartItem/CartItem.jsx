import React from 'react'

// const CartItem = ( {id, artista, titulo, precio, quantity, imagen} ) => {
// const CartItem = (product) => {
// const { id, artista, titulo, precio, quantity, imagen } = product;
// const { id, titulo, artista, quantity, precio, imagen } = product;
//NO LOGRO QUE SE RENDERICEN LOS PRODUCTOS EN CART DESESTRUCTURANDO "product", POR ESO TENGO QUE UTILIZAR "propiedad"
const CartItem = ({ id, artista, titulo, precio, quantity, imagen }) => {
    return (
        <div key={id}>
            <h2>{titulo}</h2>
            <h3>{artista}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio: ${precio}</p>
            <p>Subtotal: ${precio * quantity} </p>
            <img src={imagen} alt={titulo} />

        </div>
    )
}

export default CartItem;
