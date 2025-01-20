function ItemLists(props) {

    const category = props.category
    const items = props.items

    const listItems = items.map((item) => <div className="item" key={item.id}>
                                          <img src={`images/${item.image}`} alt={item.name} />
                                          <h3>{item.name}</h3>
                                          <p>{item.description}</p>
                                          <p>${item.price}</p>
                                          </div>)

    return (
        <div className="container">
            {listItems}
        </div>
    )
}

export default ItemLists