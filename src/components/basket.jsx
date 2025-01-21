function Basket({basket}) {
    return (
       
        <div className="basket-container">
        <h2>Cart</h2>
        {basket.map((item) => (
          <div className="basket-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p></p>
            <p>X {item.quantity}</p>
          </div>
        ))}
      </div>
    )
}

export default Basket;