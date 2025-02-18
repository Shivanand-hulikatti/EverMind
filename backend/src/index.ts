import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import basicRoutes from './routes/basic';
import mindRoutes from './routes/mind';

const app = express();

const PORT = process.env.PORT || 3000;
    

app.use(express.json());
app.use(cors());


app.use('/api/v1',basicRoutes);
app.use('/api/v1/mind',mindRoutes);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

