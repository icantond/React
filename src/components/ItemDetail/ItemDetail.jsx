import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const{ addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            product: product
        }

        addItem(item, quantity);

        toast.error('Producto agregado al carrito!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: "🛒"
            })
    }

    return (
        <div className="container-fluid">
            <article className="row">
                <h2 className="product-title">{product.titulo}</h2>
                <h2 className="product-subtitle">{product.artista}</h2>
                <div className="item-detail-img-container">
                    <img className="item-detail-img" src={product.imagen} alt={product.titulo} />
                </div>
                <p className="product-year">Año: {product.anio}</p>
                <p className="product-price">Precio: <strong>${product.precio}</strong></p>
                <p className="product-description"><strong>Lista de canciones: </strong><br /> {product.tracklist}</p>
                <p className="product-id"> Código: {product.id}</p>
                <p className="product-stock">Stock: {product.stock}</p>
            </article>
            {
                quantityAdded > 0 ? (
                    <Link to="/cart" className="btn btn-primary">Finalizar compra</Link>)
                    :
                    (<ItemCount initial={1} stock={product.stock} onAdd={(handleOnAdd)} />)
            }
        </div>
    )
}

export default ItemDetail;