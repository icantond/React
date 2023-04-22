import React, { Fragment } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import cover from "../ItemListContainer/cover.jpg";


const ItemListContainer = (props) => {

    return (

        // <Fragment>

            <div className='ItemListContainer container-fluid'>
                <div className='row'>
                    <h2 className='ItemListContainer-title'>{props.greeting}</h2>
                    <img src={cover} alt="imagen de sala de estar con colores neutros" className="cover-img" />
                </div>
            </div>
            
        // </Fragment>
    )
};
export default ItemListContainer;  


