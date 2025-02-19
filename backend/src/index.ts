import express from 'express';
import cors from 'cors';
import basicRoutes from './routes/basic';
import mindRoutes from './routes/mind';
import { connectDb } from './db';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


const PORT = process.env.PORT || 3000;
    
connectDb();



app.use(express.json());
app.use(cors());


app.use('/api/v1',basicRoutes);
app.use('/api/v1/mind',mindRoutes);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

