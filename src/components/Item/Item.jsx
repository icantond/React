import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <div className="card col-12 col-sm-6 col-lg-3">
                <img src={product.imagen} alt={product.titulo} className="card-img-top" />
                <h3 className="card-title">{product.titulo}</h3>
                <h3 className="card-subtitle">{product.artista}</h3>
                <h4 className="card-price">$ {product.precio}</h4>
                <Link to={`/item/${product.id}`} className="btn btn-outline-primary">Ver Detalle</Link>
        </div>
    )
}

export default Item;