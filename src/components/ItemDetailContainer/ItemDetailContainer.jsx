import React, { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({productId}) => {

    const [product, setProduct] = useState(null);

    const id  = useParams().productId;

    useEffect(() => {
        getProductById(Number(id))
            .then(response => {
                setProduct(response)
            })
    }, [id])

    return (
        <div className='container'>
            {product && <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer;