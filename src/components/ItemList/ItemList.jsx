import Item from "../Item/Item"

const ItemList = ( {products, title} ) => {
    return (
        <div className="row gap-2">
        <h2>{title}</h2>
            {products.map((prod) => <Item product={prod} key={prod.id} />)}
        </div>
    )
}

export default ItemList