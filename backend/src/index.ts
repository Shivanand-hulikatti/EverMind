import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;
    

app.use(express.json());
app.use(cors());

app.post('/api/v1/signup',async (req,res)=>{

});


app.post('/api/v1/signin',async (req,res)=>{

});

app.post('/api/v1/content',async (req,res)=>{

});

app.get('/api/v1/content',async (req,res)=>{

});

app.delete('/api/v1/content',async (req,res)=>{

});

app.post('/api/v1/mind/share',async (req,res)=>{

});

app.get('/api/v1/mind/:shareLink',async (req,res)=>{

});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

