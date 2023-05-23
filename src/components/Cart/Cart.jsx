import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

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
            {cart.map((product) => <CartItem key={product.id}
                title={product.titulo}
                artist={product.artista}
                quantity={product.quantity}
                price={product.precio}
                image={product.imagen} />)}

            <h3>Total: ${total} </h3>
            <button onClick={() => clearCart()}>Vaciar carrito</button>
            <Link to="/checkout" />Completar la compra <Link />
        </div>
    )
}


export default Cart