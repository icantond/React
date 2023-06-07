import React from 'react'
import './CartItem.css'

const CartItem = ({ id, artista, titulo, precio, quantity, imagen }) => {
    return (
        <tr key={id} className='cartItem-table'>
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
