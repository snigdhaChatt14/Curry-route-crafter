import biryaniImg from '@/assets/biryani.jpg';
import dosaImg from '@/assets/dosa.jpg';
import paneerImg from '@/assets/paneer-butter-masala.jpg';
import samosaImg from '@/assets/samosa.jpg';
import idliImg from '@/assets/idli.jpg';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import choleBhatureImg from '@/assets/chole-bhature.jpg';
import chaiImg from '@/assets/chai.jpg';
import tandooriImg from '@/assets/tandoori-platter.jpg';
import pavBhajiImg from '@/assets/pav-bhaji.jpg';
import thaliImg from '@/assets/thali.jpg';
import vadaPavImg from '@/assets/vada-pav.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  minOrder: number;
  image: string;
  menu: MenuItem[];
  location: string;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Biryani House',
    cuisine: ['North Indian', 'Biryani'],
    rating: 4.5,
    deliveryTime: '30-40 mins',
    minOrder: 150,
    image: biryaniImg,
    location: 'Mumbai, Maharashtra',
    menu: [
      {
        id: '1-1',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice layered with tender chicken and authentic spices',
        price: 299,
        image: biryaniImg,
        category: 'Main Course',
        isVeg: false
      },
      {
        id: '1-2',
        name: 'Paneer Butter Masala',
        description: 'Rich and creamy curry with soft paneer cubes',
        price: 249,
        image: paneerImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '1-3',
        name: 'Butter Chicken',
        description: 'Tandoori chicken in rich tomato and butter sauce',
        price: 329,
        image: butterChickenImg,
        category: 'Main Course',
        isVeg: false
      },
      {
        id: '1-4',
        name: 'Samosa',
        description: 'Crispy fried pastry with spiced potato filling',
        price: 49,
        image: samosaImg,
        category: 'Starters',
        isVeg: true
      },
      {
        id: '1-5',
        name: 'Masala Chai',
        description: 'Traditional Indian spiced tea',
        price: 30,
        image: chaiImg,
        category: 'Beverages',
        isVeg: true
      }
    ]
  },
  {
    id: '2',
    name: 'South Spice',
    cuisine: ['South Indian'],
    rating: 4.7,
    deliveryTime: '25-35 mins',
    minOrder: 100,
    image: dosaImg,
    location: 'Bangalore, Karnataka',
    menu: [
      {
        id: '2-1',
        name: 'Masala Dosa',
        description: 'Crispy rice crepe with spiced potato filling, served with chutneys',
        price: 120,
        image: dosaImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '2-2',
        name: 'Idli Sambar',
        description: 'Steamed rice cakes served with lentil curry and chutneys',
        price: 80,
        image: idliImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '2-3',
        name: 'Filter Coffee',
        description: 'Traditional South Indian filter coffee',
        price: 40,
        image: chaiImg,
        category: 'Beverages',
        isVeg: true
      },
      {
        id: '2-4',
        name: 'Medu Vada',
        description: 'Crispy lentil donuts served with sambar and chutney',
        price: 90,
        image: samosaImg,
        category: 'Starters',
        isVeg: true
      }
    ]
  },
  {
    id: '3',
    name: 'Tandoor Express',
    cuisine: ['North Indian', 'Tandoori'],
    rating: 4.3,
    deliveryTime: '35-45 mins',
    minOrder: 200,
    image: tandooriImg,
    location: 'Delhi, NCR',
    menu: [
      {
        id: '3-1',
        name: 'Tandoori Platter',
        description: 'Assorted tandoori chicken, paneer tikka, and seekh kebabs',
        price: 499,
        image: tandooriImg,
        category: 'Main Course',
        isVeg: false
      },
      {
        id: '3-2',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tandoori chicken',
        price: 329,
        image: butterChickenImg,
        category: 'Main Course',
        isVeg: false
      },
      {
        id: '3-3',
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese grilled in tandoor',
        price: 249,
        image: paneerImg,
        category: 'Starters',
        isVeg: true
      },
      {
        id: '3-4',
        name: 'Chole Bhature',
        description: 'Spicy chickpea curry with fluffy fried bread',
        price: 179,
        image: choleBhatureImg,
        category: 'Main Course',
        isVeg: true
      }
    ]
  },
  {
    id: '4',
    name: 'Mumbai Street Food',
    cuisine: ['Street Food', 'Fast Food'],
    rating: 4.6,
    deliveryTime: '20-30 mins',
    minOrder: 100,
    image: pavBhajiImg,
    location: 'Mumbai, Maharashtra',
    menu: [
      {
        id: '4-1',
        name: 'Pav Bhaji',
        description: 'Spicy mashed vegetables served with buttered pav',
        price: 120,
        image: pavBhajiImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '4-2',
        name: 'Vada Pav',
        description: 'Mumbai\'s famous potato fritter in bun',
        price: 40,
        image: vadaPavImg,
        category: 'Snacks',
        isVeg: true
      },
      {
        id: '4-3',
        name: 'Samosa',
        description: 'Crispy fried pastry with spiced potato filling',
        price: 30,
        image: samosaImg,
        category: 'Snacks',
        isVeg: true
      },
      {
        id: '4-4',
        name: 'Masala Chai',
        description: 'Authentic Mumbai cutting chai',
        price: 20,
        image: chaiImg,
        category: 'Beverages',
        isVeg: true
      }
    ]
  },
  {
    id: '5',
    name: 'Royal Thali',
    cuisine: ['North Indian', 'Thali'],
    rating: 4.8,
    deliveryTime: '40-50 mins',
    minOrder: 250,
    image: thaliImg,
    location: 'Jaipur, Rajasthan',
    menu: [
      {
        id: '5-1',
        name: 'Royal Thali',
        description: 'Complete meal with dal, sabzi, roti, rice, raita, and dessert',
        price: 349,
        image: thaliImg,
        category: 'Thali',
        isVeg: true
      },
      {
        id: '5-2',
        name: 'Paneer Butter Masala',
        description: 'Rich and creamy paneer curry',
        price: 249,
        image: paneerImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '5-3',
        name: 'Biryani',
        description: 'Fragrant rice with vegetables and aromatic spices',
        price: 279,
        image: biryaniImg,
        category: 'Main Course',
        isVeg: true
      },
      {
        id: '5-4',
        name: 'Lassi',
        description: 'Traditional yogurt-based drink',
        price: 60,
        image: chaiImg,
        category: 'Beverages',
        isVeg: true
      }
    ]
  }
];

export const cuisineTypes = [
  'All',
  'North Indian',
  'South Indian',
  'Tandoori',
  'Street Food',
  'Thali',
  'Biryani'
];
