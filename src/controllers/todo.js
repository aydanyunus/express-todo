import {v4 as uuid} from 'uuid';


const todos = []

const getTodo = ((req, res) => {
    res.status(200).json(todos)

})

const getTodoByID = ((req, res) => {
    const { status } = req.query

    if (!isNaN(status)) {
        const filteredTodo = todos.filter((todo) => todo.status === status)
        res.status(200).json(filteredTodo)
    }
})

const addTodo = ((req, res) => {
    const id = uuid();
    const result = todos.push(({ ...req.body, id }));
    res.status(200).json(result)
})


const editTodo = ((req, res) => {
   
})


const removeTodo = ((req, res) => {
   
})


export {
    getTodo,
    getTodoByID,
    addTodo,
    editTodo,
    removeTodo
}