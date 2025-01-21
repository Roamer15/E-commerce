
function ShoppingBasket({ itemCounts, items }) {
    // Filter itemCounts to include only items with a count greater than 0
    const basketItems = itemCounts
        .filter((countItem) => countItem.count > 0) // Ignore items with a count of 0
        .map((countItem) => {
            // Find the corresponding item in the items array by matching the id
            const item = items.find((item) => item.id === countItem.id);
            
            // Create a list item for each item in the basket
            return (
                <li key={countItem.id}>
                    <img src={`${item.image}`} alt={item.name} />
                    {item.name} x {countItem.count}
                </li>
            )
        })

    return (
        <div className="basket">
            <h2>Shopping Basket</h2>
            <ul>{basketItems}</ul>
        </div>
    )
}

export default ShoppingBasket
