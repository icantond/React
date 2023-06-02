import { createContext, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    clearCart: () => { },
    totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    // console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.product.id)) {
            setCart(prev => [...prev, { ...item.product, quantity }])
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
    };

    const removeItem = (productId) => {
        const updatedCart = cart.filter(prod => prod.id !== productId);
        setCart(updatedCart);
        const removedItem = cart.find(prod => prod.id === productId);
        setTotalQuantity(prevQuantity => prevQuantity - removedItem.quantity);
    };

    const clearCart = () => {
        setCart([]);
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: <p>Vaciando el carrito</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
        }).then(() => {
            return MySwal.fire(<p>Carrito vaciado!</p>)
        })
    };

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, getTotalPrice, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
