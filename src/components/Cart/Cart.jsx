import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext)

    const calculateTotal = () => {
        return cart.reduce((total, product) => {
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
        <div className="container">
            <div className="row">
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(prod => <CartItem key={prod} product={prod} {...prod} />)}
                        {/* {cart.map(prod => <CartItem key={prod.id} product={prod} />)} */}
                    </tbody>
                </table>
                <h3>Total: ${calculateTotal()} </h3>
                {cart.length > 0
                    ? <button onClick={() => clearCart()} className="btn btn btn-outline-danger col-3 m-auto">Vaciar carrito</button>
                    : <button onClick={() => clearCart()} className="btn btn-outline-light col-3 m-auto" disabled>Vaciar carrito</button>}
                <Link to="/checkout" className="btn btn-outline-success col-3 m-auto" >Completar la compra </Link>
            </div>
        </div>
    )
}					


export default Cart;
