import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({product}) => {

    return (

        <div className="container-fluid">
            <article className="row">
                <h2 className="product-title">{product.titulo}</h2>
                <h2 className="product-subtitle">{product.artista}</h2>
                <div className="item-detail-img-container">
                    <img className="item-detail-img" src={product.imagen} alt={product.titulo}/>
                </div>
                <p className="product-year">Año: {product.anio}</p>
                <p className="product-price">Precio: <strong>${product.precio}</strong></p>
                <p className="product-description"><strong>Lista de canciones: </strong><br/> {product.tracklist}</p>
                <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
                <p className="product-id"> Código:{product.id}</p>
            </article>
        </div>
    )
}

export default ItemDetail