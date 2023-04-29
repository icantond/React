import React, { Fragment } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import cover from "../ItemListContainer/cover.jpg";
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = (props) => {

    return (

        <>
            <div className='ItemListContainer container-fluid'>
                <div className='row'>
                    <h2 className='ItemListContainer-title'>{props.greeting}</h2>
                    <img src={cover} alt="imagen de sala de estar con colores neutros" className="cover-img" />
                </div>
            </div>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)} />
        </>
    )
};
export default ItemListContainer;


