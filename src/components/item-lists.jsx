function ItemLists({ product, onAddProduct }) {
 
    return (
       
      <div className="item-list">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="buttons">
          <button className="add" onClick={() => onAddProduct(product.id, 1)}>
            +
          </button>
          <button className="remove" onClick={() => onAddProduct(product.id, -1)}>
            -
          </button>
        </div>
      </div>
    )
  }
  export default ItemLists;
