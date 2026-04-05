import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  createdAt: number;
}


let products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'Experience immersive sound with our latest noise-cancelling technology and 40-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    createdAt: Date.now() - 86400000 * 2,
  },
  {
    id: '2',
    name: 'Smart Minimalist Watch',
    price: 199.50,
    description: 'A sleek, elegant timepiece that tracks your health metrics while looking professional.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    createdAt: Date.now() - 86400000,
  },
  {
    id: '3',
    name: 'Ergonomic Mechanical Keyboard',
    price: 159.00,
    description: 'Boost your productivity with custom-tuned tactile switches and RGB lighting.',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
    createdAt: Date.now(),
  },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});


app.post('/api/products', (req, res) => {
  const { name, price, description, image } = req.body;
  if (!name || price === undefined || !description) {
    return res.status(400).json({ message: 'Name, price, and description are required' });
  }

  const newProduct: Product = {
    id: randomUUID(),
    name,
    price: Number(price),
    description,
    image,
    createdAt: Date.now(),
  };

  products = [newProduct, ...products];
  res.status(201).json(newProduct);
});


app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[index] = { ...products[index], ...updates };
  res.json(products[index]);
});


app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const authHeader = req.headers.authorization;
  
  const initialLength = products.length;
  products = products.filter((p) => p.id !== id);

  if (products.length === initialLength) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ message: 'Product deleted successfully', id });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
