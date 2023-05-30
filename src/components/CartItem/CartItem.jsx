import React from 'react'
import './CartItem.css'

// const CartItem = ( {id, artista, titulo, precio, quantity, imagen} ) => {
// const CartItem = (product) => {
// const { id, artista, titulo, precio, quantity, imagen } = product;
// const { id, titulo, artista, quantity, precio, imagen } = product;
//NO LOGRO QUE SE RENDERICEN LOS PRODUCTOS EN CART DESESTRUCTURANDO "product", POR ESO TENGO QUE UTILIZAR "propiedad"
const CartItem = ({ id, artista, titulo, precio, quantity, imagen }) => {
    return (
        <tr key={id}>
                <td className='d-flex justify-content-between p-5'>
                <h5 className='cartitem-title'>{titulo}</h5>
                <p className='cart-item-artist'>{artista}</p>
                <img src={imagen} alt={titulo} className='cartitem-img'/>
                </td>
                <td><p className='cartitem-qty'>{quantity}</p></td>
                <td><p className='cartitem-price'>${precio}</p></td>
                <td><p className='cartitem-subtotal'>${precio * quantity} </p></td>
        </tr>
        
    )
}

export default CartItem;
