import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';


import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

import itemRoutes from './src/routes/itemRoutes.js'; 

dotenv.config();

const app = express();
app.use(express.json());


const origins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3000'];
app.use(cors({ origin: origins, methods: ['GET','POST','PUT','DELETE'] }));
app.use(helmet());


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


app.use('/api/items', itemRoutes);



app.get('/', (req, res) => res.json({ message: 'User Management API is running' }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

