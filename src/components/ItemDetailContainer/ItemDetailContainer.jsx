import React, { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'

const ItemDetailContainer = ({ productId }) => {

    const [product, setProduct] = useState(null);

    const id = useParams().productId;

    useEffect(() => {
        getProductById(Number(id))
            .then(response => {
                setProduct(response)
            })
    }, [id])

    return (
        <div className='container'>
            <CartProvider>
                {product && <ItemDetail product={product} />}
            </CartProvider>
        </div>
    )
}

export default ItemDetailContainer;