import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./CartWidget.css"
import { Link } from 'react-router-dom';
import carticon from '../../assets/img/carticon.svg'


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);
    return (

        <Link to="/cart">
            <div className='cartwidget-container d-flex'>
                <img src={carticon} alt='carrito' className='cartwidget-icon'/>
                {totalQuantity > 0 &&
                    <div className='cartwidget-counter'>
                        <span className='cartwidget-number'>{totalQuantity}</span>
                    </div>
                }
            </div>
        </Link>
    )
};
export default CartWidget;
