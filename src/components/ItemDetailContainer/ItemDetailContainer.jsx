import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", productId)
        
        getDoc(docRef)
            .then(response=>{
                const data = response.data()
                const productAdapted={id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [productId])

    return (
        <div className='container p-5'>
                {product && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer;
