import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import todoRouter from './routes/todo.route.js';

const port = process.env.PORT

const app = express();

app.use(express.json());


app.use('/todo', todoRouter)


app.listen(port, ()=> {
    console.log(`server running on ${port}`)
})