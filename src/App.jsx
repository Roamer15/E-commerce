import Header from './components/header'
import ItemLists from './components/item-lists'
import './App.css'

function App() {

  const groceries = [
    {
        id: 1,
        name: 'Fresh Apples',
        description: 'Crisp and sweet red apples, perfect for snacking or baking.',
        price: 2.50,
        image: 'src/assets/images/apple.jpg',
    },
    {
        id: 2,
        name: 'Bananas',
        description: 'Naturally ripened bananas with a smooth, creamy texture.',
        price: 1.20,
        image: 'src/assets/images/banana.jpeg',
    },
    {
        id: 3,
        name: 'Whole Grain Bread',
        description: 'Soft and healthy bread made with 100% whole grains.',
        price: 3.99,
        image: 'src/assets/images/bread.jpeg',
    },
    {
        id: 4,
        name: 'Farm Fresh Eggs',
        description: 'A dozen large, free-range eggs, rich in protein.',
        price: 4.50,
        image: 'src/assets/images/eggs.jpeg',
    },
    {
        id: 5,
        name: 'Cheddar Cheese Block',
        description: 'A rich, sharp cheddar cheese, great for sandwiches and snacks.',
        price: 5.99,
        image: 'src/assets/images/cheese.jpeg',
    },
    {
        id: 6,
        name: 'Chicken Breast',
        description: 'Boneless, skinless chicken breast, lean and tender.',
        price: 7.50,
        image: 'src/assets/images/banana.jpeg',
    },
    {
        id: 7,
        name: 'Milk (1 Gallon)',
        description: 'Fresh whole milk, rich in calcium and vitamins.',
        price: 4.29,
        image: 'item1.jpg',
    },
    {
        id: 8,
        name: 'Cereal (Honey Oats)',
        description: 'Crunchy oats with a touch of honey for a wholesome breakfast.',
        price: 3.89,
        image: 'item1.jpg',
    },
    {
        id: 9,
        name: 'Yogurt',
        description: 'Creamy, low-fat Greek yogurt in a 16 oz container.',
        price: 4.99,
        image: 'item1.jpg',
    },
    {
        id: 10,
        name: 'Spinach',
        description: 'Organic spinach leaves, washed and ready to eat.',
        price: 2.99,
        image: 'item1.jpg',
    },
    {
        id: 11,
        name: 'Tomatoes',
        description: 'Juicy and ripe tomatoes, ideal for salads and sauces.',
        price: 2.79,
        image: 'item1.jpg',
    },
    {
        id: 12,
        name: 'Knife',
        description: 'Sharp and good for cutting duh',
        price: 3.5,
        image: 'item1.jpg',
    },
    {
        id: 13,
        name: 'Carrots',
        description: 'Sweet and crunchy baby carrots, perfect for snacking.',
        price: 1.99,
        image: 'item1.jpg',
    },
    {
        id: 14,
        name: 'Potatoes',
        description: 'Versatile russet potatoes, great for mashing, baking, or frying.',
        price: 0.89,
        image: 'item1.jpg',
    },
    {
        id: 15,
        name: 'Butter',
        description: 'Smooth and creamy peanut butter, made with roasted peanuts.',
        price: 3.49,
        image: 'item1.jpg',
    },
    {
        id: 16,
        name: 'Spaghetti Pasta',
        description: 'Classic Italian spaghetti, perfect for a quick and easy meal.',
        price: 1.79,
        image: 'item1.jpg',
    },
    {
        id: 17,
        name: 'Marinara Sauce',
        description: 'Rich tomato-based marinara sauce with herbs and garlic.',
        price: 3.99,
        image: 'item1.jpg',
    },
    {
        id: 18,
        name: 'Olive Oil',
        description: 'Extra virgin olive oil, cold-pressed for maximum flavor.',
        price: 8.99,
        image: 'item1.jpg',
    },
    {
        id: 19,
        name: 'Chocolate Bar (Dark)',
        description: 'Smooth and rich dark chocolate with 70% cocoa.',
        price: 2.99,
        image: 'item1.jpg',
    },
    {
        id: 20,
        name: 'Coffee (Ground)',
        description: 'Medium roast ground coffee with a rich and aromatic flavor.',
        price: 7.49,
        image: 'item1.jpg',
    },
    {
      id: 21,
      name: 'Honey',
      description: 'Pure, natural honey with a rich golden color, perfect for sweetening tea, baking, or drizzling over desserts.',
      price: 6.49,
      image: 'item1.jpg',
  }
]

  return (
    <>
      <Header />
        <h1 className="welcome-msg">Welcome To Shoopify!</h1>
        <ItemLists items={groceries} category='Grocery'/>
    </>
  )
}

export default App
