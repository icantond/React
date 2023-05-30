import { createContext, useState } from 'react'

export const CartContext = createContext({ cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0, });

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.product.id)) {
            setCart(prev => [...prev, { ...item.product, quantity }])
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (productId) => {
        const updatedCart = cart.filter(prod => prod.id !== productId);
        setCart(updatedCart);
        const removedItem = cart.find(prod => prod.id === productId);
        setTotalQuantity(prevQuantity => prevQuantity - removedItem.quantity);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
