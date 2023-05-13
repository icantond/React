import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {

    return (

        <div className="container-fluid">
            <article className="row">
                <h2>{product.titulo}</h2>
                <h2>{product.artista}</h2>
                <div className="item-detail-img-container">
                    <img src={product.imagen} alt={product.titulo}/>
                </div>
                <p>Año: {product.anio}</p>
                <p>Precio: ${product.precio}</p>
                <p><strong>Lista de canciones: </strong><br/> {product.tracklist}</p>
                <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
                <p> Código:{product.id}</p>
            </article>
        </div>
    )
}

export default ItemDetail