import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./CartWidget.css"
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);
        
    return (
        // <div className='cartwidget-container'>
        //     <i className="bi bi-cart"></i>
        //     {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        // </div>
        <Link to="/cart">
            <i className='bi bi-cart'></i>
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </Link>
    )
};
export default CartWidget;
