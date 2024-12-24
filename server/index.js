import express from 'express';
import cors from 'cors';
const app=express();
import router from './routes/routes.js';
import { dbConnection } from './database/db.js';

app.use(cors());

app.use('/',router);

const PORT = 8080;

dbConnection();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})