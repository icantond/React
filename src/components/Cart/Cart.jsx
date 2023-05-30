import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    const calculateTotal = () =>{
        return cart.reduce((total, product) =>{
            return total + product.quantity * product.precio;
        }, 0);
    };

    if (totalQuantity === 0) {
        return (
            <div>
                <h2>No hay artículos en el carrito</h2>
                <Link to="/">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(prod =>    <CartItem key={prod} product={prod} {...prod} />)}
            {/* {cart.map(prod => <CartItem key={prod.id} product={prod} />)} */}

            <h3>Total: ${calculateTotal()} </h3>
            {cart.length>0 
            ? <button onClick={() => clearCart()} className="btn btn btn-outline-danger">Vaciar carrito</button> 
            : <button onClick={() => clearCart()} className="btn btn-outline-light" disabled>Vaciar carrito</button>}
            <Link to="/checkout" className="btn btn-outline-success" >Completar la compra </Link>
        </div>
    )
}


export default Cart