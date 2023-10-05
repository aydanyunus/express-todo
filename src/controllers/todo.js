import { v4 as uuid } from 'uuid';

const todos = [];

const getTodos = ((req, res) => res.status(200).json(todos));

const getTodoByID = ((req, res) => {
  const { id } = req.params;
  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.status(200).json(todo);
});

const addTodo = ((req, res) => {
  const { title, completed } = req.body;

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Completed must be true or false' });
  }

  const todo = {
    id: uuid(),
    title,
    completed: completed !== undefined ? completed : false,
  };

  todos.push(todo);
  return res.status(201).json({ message: 'todo created' });
});

const editTodo = ((req, res) => {
  const { id } = req.params;
  const selectedTodo = todos.find((todo) => todo.id === id);
  if (!selectedTodo) {
    return res.status(404).json({ error: 'Not found' });
  }
  const { title, completed } = req.body;
  if (title !== undefined) {
    selectedTodo.title = title;
  }
  if (completed !== undefined) {
    if (completed === true || completed === false) {
      selectedTodo.completed = completed;
    } else {
      return res.status(400).json({ error: 'Invalid completed value' });
    }
  }
  return res.json(selectedTodo);
});

const removeTodo = ((req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  todos.splice(todoIndex, 1);
  return res.json({ message: 'todo deleted' });
});

export {
  getTodos,
  getTodoByID,
  addTodo,
  editTodo,
  removeTodo,
};
