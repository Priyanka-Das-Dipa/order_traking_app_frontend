import img1 from '../../src/assets/image12.jpg'
import img2 from '../../src/assets/pizza1.jpg'
import img3 from '../../src/assets/burger1.jpg'
import img4 from '../../src/assets/burger2.jpg'
import img5 from '../../src/assets/img6.jpg'
import img6 from '../../src/assets/img5.jpg'
import img7 from '../../src/assets/salad1.jpg'
import img8 from '../../src/assets/salad2.jpg'
import img9 from '../../src/assets/icecream1.jpg'
import img10 from '../../src/assets/icecream2.jpg'
export const menuItems = [
  {
    id: 'item-001',
    name: 'Margherita Pizza',
    description: 'Classic tomato sauce, mozzarella, and fresh basil',
    price: 12.99,
    category: 'Pizza',
    image: img1,
  },
  {
    id: 'item-002',
    name: 'Pepperoni Pizza',
    description: 'Tomato sauce, mozzarella, and pepperoni',
    price: 14.99,
    category: 'Pizza',
    image: img2
  },
  {
    id: 'item-003',
    name: 'Cheese Burger',
    description: 'Beef patty, cheese, lettuce, tomato, and special sauce',
    price: 10.99,
    category: 'Burger',
    image: img3
  },
  {
    id: 'item-004',
    name: 'Chicken Burger',
    description: 'Grilled chicken, lettuce, tomato, and mayo',
    price: 9.99,
    category: 'Burger',
    image: img4
  },
  {
    id: 'item-005',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with bacon and parmesan',
    price: 13.99,
    category: 'Pasta',
    image: img5
  },
  {
    id: 'item-006',
    name: 'Penne Arrabiata',
    description: 'Spicy tomato sauce with garlic and chili',
    price: 11.99,
    category: 'Pasta',
    image: img6
  },
  {
    id: 'item-007',
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
    price: 8.99,
    category: 'Salad',
    image: img7
  },
  {
    id: 'item-008',
    name: 'Greek Salad',
    description: 'Tomatoes, cucumber, olives, feta cheese',
    price: 9.99,
    category: 'Salad',
    image: img8
  },
  {
    id: 'item-009',
    name: 'Coca Cola',
    description: 'Chilled soft drink',
    price: 2.99,
    category: 'Drinks',
    image: 'https://ibb.co/zTmWDvbT'
  },
  {
    id: 'item-010',
    name: 'Lemonade',
    description: 'Fresh homemade lemonade',
    price: 3.99,
    category: 'Drinks',
    image: 'https://ibb.co/zTmWDvbT'
  },
  {
    id: 'item-011',
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate frosting',
    price: 6.99,
    category: 'Dessert',
    image: 'https://ibb.co/zTmWDvbT'
  },
  {
    id: 'item-012',
    name: 'Ice Cream',
    description: 'Vanilla ice cream with chocolate sauce',
    price: 5.99,
    category: 'Dessert',
    image: img10
  }
];

export const categories = ['All', 'Pizza', 'Burger', 'Pasta', 'Salad', 'Drinks', 'Dessert'];