import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const addCount = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrementCount = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='item-counter'>
            <div className='counter-controls m-2'>
                <button className="btn btn-outline-danger" onClick={decrementCount}>-</button>
                <span className='counter-number'>{quantity}</span>
                <button className="btn btn-outline-danger" onClick={addCount}>+</button>
            </div>
            <button className="btn btn-outline-danger" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
