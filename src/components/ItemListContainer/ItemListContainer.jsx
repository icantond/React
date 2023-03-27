import React from 'react';
import "../ItemListContainer/ItemListContainer.css";
import cover from "../ItemListContainer/cover.jpg";
const ItemListContainer = (props) => {
    return (
        <div className='ItemListContainer container-fluid'>
            <div className='row'>
                <h2 className='ItemListContainer-title'>{props.greeting}</h2>
                <img src={cover} alt="imagen de sala de estar con colores neutros" className="cover-img"/>
            </div>
        </div>
    )
};

export default ItemListContainer;
