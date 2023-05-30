import { useEffect, useState } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
// import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useAsyncError, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    // const category = useParams().category;
    const { categoryId } = useParams()
    // const [title, setTitle] = useState("Productos")


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            // getProducts()
            .then((response) => {
                // if (category) {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
                //setProducts(response.filter((prod) => prod.category === category));
                //setTitle(category);
            })
            .catch(error => {
                console.log(useAsyncError)
            })
            .finally(() => {
                setLoading(false)
            })
        //                  else {
        //                     setProducts(response);
        //                     setTitle("Productos");
        //                 }
        //    )
    }, [categoryId])

    return (
        <div className='ItemListContainer container'>
            {/* <ItemList products={products} title={title} /> */}
            <ItemList products={products} />
        </div>
    )
};

export default ItemListContainer;


