import React, { useEffect, useState } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const category = useParams().category;

    const [title, setTitle] = useState("Productos")

    useEffect(() => {
        getProducts()
        .then((response) => {
            if (category){
                setProducts(response.filter((prod) => prod.category === category));
                setTitle(category);
            } else{
                setProducts(response);
                setTitle("Productos");
            }
        })
    }, [category])

    return (
        <div className='ItemListContainer container'>
            <ItemList products={products} title={title} />
        </div>
    )
};

export default ItemListContainer;


