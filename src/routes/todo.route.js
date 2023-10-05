import { Router } from "express";
import { getTodo, getTodoByID, addTodo, editTodo, removeTodo } from "../controllers/todo.js";


const todoRouter = Router()

todoRouter.get('/', getTodo)

todoRouter.get('/:id', getTodoByID)

todoRouter.post('/', addTodo)

todoRouter.put('/:id', editTodo)

todoRouter.delete('/:id', removeTodo)

export default todoRouter;