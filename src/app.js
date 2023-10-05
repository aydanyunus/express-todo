import express from 'express';
import dotenv from 'dotenv';
import todoRouter from './routes/todo.route.js';
dotenv.config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(express.json());

app.use('/todos', todoRouter);


app.listen(port,host, () => {
  console.log(`server running on ${host}:${port}`);
});