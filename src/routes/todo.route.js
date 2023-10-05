import { Router } from 'express';
import {
  getTodos, addTodo, editTodo, removeTodo, getTodoByID,
} from '../controllers/todo.js';

const todoRouter = Router();

todoRouter.get('/', getTodos);

todoRouter.get('/:id', getTodoByID);

todoRouter.post('/', addTodo);

todoRouter.put('/:id', editTodo);

todoRouter.delete('/:id', removeTodo);

export default todoRouter;
