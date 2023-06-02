import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./CartWidget.css"
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
 
        <Link to="/cart">
            <div className='cartwidget-container d-flex'>
                <i className='bi bi-cart'></i>
                {totalQuantity > 0 &&
                    <div className='cartwidget-counter'>
                    <i className={`bi bi-${totalQuantity}-circle-fill`}></i>
                        {/* <span className='cartwidget-counter-number'>{totalQuantity}</span> */}
                    </div>
                } 
            </div>
        </Link>
    )
};
export default CartWidget;
