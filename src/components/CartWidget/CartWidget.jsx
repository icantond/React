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
            <div className='cartwidget-container d-flex'>
                <i className='bi bi-cart'></i>
                {totalQuantity > 0 &&
                    <div className='cartwidget-counter'>
                        <span className='cartwidget-counter-number'>{totalQuantity}</span>
                    </div>
                } 
            </div>
        </Link>
    )
};
export default CartWidget;
