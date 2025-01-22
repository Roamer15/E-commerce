import { useState } from 'react'
import Header from './components/header'
import ItemLists from './components/item-lists'
import Basket from './components/basket'
import './App.css'

function App() {

  const groceries = [
    {
        id: 1,
        name: 'Fresh Apples',
        description: 'Crisp and sweet red apples, perfect for snacking or baking.',
        price: 2.50,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBB6LXusuZ4yC3x4BHvH27bz0-Cle3TPD0A&s',
    },
    {
        id: 2,
        name: 'Bananas',
        description: 'Naturally ripened bananas with a smooth, creamy texture.',
        price: 1.20,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVL6XVr6OXQlJpwZTF07vsz7P01Dflr3R6hQ&s',
    },
    {
        id: 3,
        name: 'Whole Grain Bread',
        description: 'Soft and healthy bread made with 100% whole grains.',
        price: 3.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpaw2mdvYTSwqRpzq9Ka9aEOub1haRwBSlQ&s',
    },
    {
        id: 4,
        name: 'Farm Fresh Eggs',
        description: 'A dozen large, free-range eggs, rich in protein.',
        price: 4.50,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KAT_7gLdU04qDEiLPl7aeJ9EUZt-o8OgLQ&s',
    },
    {
        id: 5,
        name: 'Cheddar Cheese Block',
        description: 'A rich, sharp cheddar cheese, great for sandwiches and snacks.',
        price: 5.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZs8rJ0eaDB3IlYqR3OFdPrCWZpuploj9PQ&s',
    },
    {
        id: 6,
        name: 'Chicken Breast',
        description: 'Boneless, skinless chicken breast, lean and tender.',
        price: 7.50,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOVj0gkToADccS4OJZ_yv1reQfWpiM25GqA&s',
    },
    {
        id: 7,
        name: 'Milk (1 Gallon)',
        description: 'Fresh whole milk, rich in calcium and vitamins.',
        price: 4.29,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsY1zsCdYu4BpjCx0lhvR7oXAZFdFU7QxJLw&s',
    },
    {
        id: 8,
        name: 'Cereal (Honey Oats)',
        description: 'Crunchy oats with a touch of honey for a wholesome breakfast.',
        price: 3.89,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdO39SiOH0JuhuS4yw15yO9K3djxfZGKB9g&s',
    },
    {
        id: 9,
        name: 'Yogurt',
        description: 'Creamy, low-fat Greek yogurt in a 16 oz container.',
        price: 4.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50UBX0wGa63l33KgjTyeMAKS693QasD-cnQ&s',
    },
    {
        id: 10,
        name: 'Spinach',
        description: 'Organic spinach leaves, washed and ready to eat.',
        price: 2.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7o4Cmy5Sje5keBeB60oBOu1sJTVmomHwqA&s',
    },
    {
        id: 11,
        name: 'Tomatoes',
        description: 'Juicy and ripe tomatoes, ideal for salads and sauces.',
        price: 2.79,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvxG1Q2d8z34WMyVppwu0U-t1N4shHeWuzQ&s',
    },
    {
        id: 12,
        name: 'Knife',
        description: 'Sharp and good for cutting duh',
        price: 3.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvumBXVg4jjR-n9DK81KNi5Hs0EpN6Bhjo2g&s',
    },
    {
        id: 13,
        name: 'Carrots',
        description: 'Sweet and crunchy baby carrots, perfect for snacking.',
        price: 1.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJ9sIF7pWsFo7ZOefEpaiqF1ifYRjnae-aw&s',
    },
    {
        id: 14,
        name: 'Potatoes',
        description: 'Versatile russet potatoes, great for mashing, baking, or frying.',
        price: 0.89,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRID980g-_V6Nn7sqmUOp4h2qrcIQoU3LWRVw&s',
    },
    {
        id: 15,
        name: 'Butter',
        description: 'Smooth and creamy peanut butter, made with roasted peanuts.',
        price: 3.49,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgimzFq4xqLsjrVkGfTGDeaxQZUfWLQlvDA&s',
    },
    {
        id: 16,
        name: 'Spaghetti Pasta',
        description: 'Classic Italian spaghetti, perfect for a quick and easy meal.',
        price: 1.79,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMtERyP-OR6lI2wZ5PnvLpzKSfZfuAg6Cdg&s',
    },
    {
        id: 17,
        name: 'Marinara Sauce',
        description: 'Rich tomato-based marinara sauce with herbs and garlic.',
        price: 3.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs904_6f12zKFyX4VxxwfN7T9eMRyzVYzmlA&s',
    },
    {
        id: 18,
        name: 'Olive Oil',
        description: 'Extra virgin olive oil, cold-pressed for maximum flavor.',
        price: 8.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0k4sOjyquDzgDQshpyPUFyF2aJgI__LQ7Iw&s',
    },
    {
        id: 19,
        name: 'Chocolate Bar (Dark)',
        description: 'Smooth and rich dark chocolate with 70% cocoa.',
        price: 2.99,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxnLocKgF4mlAbZWXV5u0j1irQvxure0wHA&s',
    },
    {
        id: 20,
        name: 'Coffee (Ground)',
        description: 'Medium roast ground coffee with a rich and aromatic flavor.',
        price: 7.49,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JtYz8zhnwQ4ypRtE9xgmTY-792KlJU1GfA&s',
    }
]

const [basket, setBasket] = useState([]);
  const addProduct = (id, quantity) => {
    // Get the product from the groceries array
    const product = groceries.find((product) => product.id === id);
    // Create a new basket array to avoid mutating the state directly
    const newBasket = [...basket];
    // Find the index of the product in the basket
    const index = newBasket.findIndex((item) => item.id === product.id);
    // If the product is already in the basket, update the quantity
    if (index >= 0) {
      newBasket[index].quantity += quantity;
      // If the quantity is 0 or less, remove the product from the basket
      if (newBasket[index].quantity <= 0) {
        newBasket.splice(index, 1);
      }
      // Update the new basket with the new array
    } else if (quantity > 0) {
      newBasket.push({
        ...product,
        quantity: quantity,
      });
    }
    // Update the basket state with the new basket array
    setBasket(newBasket);
  };


 
return (
    <div className="main-container">
      <Header />
      <h1 className='welcome-msg'>Welcome To Shoopify</h1>
      <div className="container">
        <div className="card-container">
        {groceries.map((product) => 
          <ItemLists key={product.id} product={product} onAddProduct={addProduct}/>
        )}
        </div>
        <Basket basket={basket}/>
      </div>
    </div>
  );
}
export default App;

