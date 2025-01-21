import { useState } from 'react'
import ShoppingBasket from './basket.jsx'; // Import the new component

function ItemLists(props) {
    const items = props.items

    const [itemCounts, setItemCounts] = useState(
        items.map((item) => ({ id: item.id, count: 0 }))
    )

    const increment = (id) => {
        setItemCounts((prevCounts) =>
            prevCounts.map((item) =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        )
    }

    const decrement = (id) => {
        setItemCounts((prevCounts) =>
            prevCounts.map((item) =>
                item.id === id && item.count > 0
                    ? { ...item, count: item.count - 1 }
                    : item
            )
        )
    }

    const listItems = items.map((item) => {
        const itemCount = itemCounts.find((countItem) => countItem.id === item.id)?.count || 0;

        return (
            <>
            <div className="item" key={item.id}>
                <img src={`${item.image}`} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price}</p>
                <div className="btn">
                    <button id="add" onClick={() => increment(item.id)}>+</button>
                    <p>{itemCount}</p>
                    <button id="remove" onClick={() => decrement(item.id)}>-</button>
                </div>
            </div>
        </>
        )
    })
    

    return (
    <>
     <div className="container">
            {listItems}
        </div>
        <ShoppingBasket itemCounts={itemCounts} items={items} /> {/* Use ShoppingBasket */}
    </>
       
    )
}

export default ItemLists;
