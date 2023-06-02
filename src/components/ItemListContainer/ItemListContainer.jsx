import { useEffect, useState } from 'react';
import "../ItemListContainer/ItemListContainer.css";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import ItemList from '../ItemList/ItemList';
import { useAsyncError, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(useAsyncError)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div className='ItemListContainer container'>
            {loading ?
                (<>
                    <div className="spinner-grow text-danger d-flex" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger d-flex" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger d-flex" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>  <div className="spinner-grow text-danger d-flex" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger d-flex" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </>
                ) :
                <ItemList products={products} />}
        </div>
    )
};

export default ItemListContainer;


