import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config();

connectDB();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// dùng cookie để lưu token
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(port, () => console.log(`Server started on port ${port}`));
