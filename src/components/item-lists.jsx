function ItemLists(props) {

    const category = props.category
    const items = props.items

    const listItems = items.map((item) => <div className="item" key={item.id}>
                                          <img src={`${item.image}`} alt={item.name} />
                                          <h3>{item.name}</h3>
                                          <p>{item.description}</p>
                                          <p>${item.price}</p>
                                          <div className="btn">
                                            <button id="add">+</button>
                                            <button id="remove">-</button>
                                          </div>
                                          </div>)
    
    // const addButtton = document.getElementById('add')
    // const removeButton = document.getElementById('remove')

    // addButtton.addEventListener('click', () => {
    //     console.log('Item added to cart')
    //     let purchase = JSON.parse(localStorage.getItem('bought')) || []
    //     const productExists = purchase.some((product) => product.id === groceries.id)


    //     if (!productExists) {
    //     // Add movie to cart
    //     purchase.push(groceries)
    //     localStorage.setItem('bought', JSON.stringify(purchase)) // Save updated list
    //     console.log(`${groceries.name} has been added to your cart.`)
    //    }
    //    else {
    //     // Add number to cart
    //   }
    // })

    // removeButton.addEventListener('click', () => {

    // })

    return (
        <div className="container">
            {listItems}
        </div>
    )
}

export default ItemLists