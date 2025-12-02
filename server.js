// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load config
dotenv.config();

connectDB();
const app = express();

// Middleware (The Air Conditioning)
// Allows us to accept JSON data in the body of requests
app.use(express.json());

// A simple test route (The Doorbell)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount routes
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));