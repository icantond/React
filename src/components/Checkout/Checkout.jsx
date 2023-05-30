import React, { useContext, useState } from 'react';
import { db } from "../../services/firebase/firebaseConfig";
import { collection } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {CartContext} from "../context/CartContext"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [cart, total, clearCart] = useContext(CartContext);

    const createOrder = async ({ name, phone, email, address }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email, address
                },
                items: cart,
                total: total,
                date: TimeStamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, "products")
            const producsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids)))
            const { docs } = producsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Algunos de los productos agregados no cuenta con stock disponible")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading){
        return <h3>Tu pedido está siendo procesado</h3>
    }
    if(orderId){
        return <h3>Tu pedido se ha registrado con el número de órden {orderId} </h3>
    }
    return (
        <div>
            <h2>Checkout</h2>
            <p>Ingresa tus datos para generar el pedido</p>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;
