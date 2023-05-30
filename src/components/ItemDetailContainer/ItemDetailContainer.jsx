import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


// const ItemDetailContainer = ({ productId }) => {
const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { productId } = useParams()
    // const id = useParams().productId;

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
            // getProductById(Number(id))
            //     .then(response => {
            //         setProduct(response)
            //     })
    }, [productId])

    return (
        <div className='container'>
                {product && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer;