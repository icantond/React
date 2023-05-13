import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className="row gap-2">
                {products.map((prod) => <Item product={prod} key={prod.id} />)}
        </div>
    )
}
export default ItemList