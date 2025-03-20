import { Task } from "../schemas/Task.js"


const getTasks = async(req, res) => {
    const tasks = await Task.findAll()
    res.json(tasks)
}

const getTask = (req, res) => res.send('obteniendo tarea unica')

const createTask = async (req, res) => {
    const { name, done } = req.body
    const newTask = await Task.create({
        name,
        done
    })
    res.json(newTask)
}

const updateTask = (req, res) => res.send('modificando tarea')

const deleteTask = (req, res) => res.send('eliminando tarea')

export {getTasks, getTask, createTask, updateTask, deleteTask }


