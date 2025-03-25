import { Task } from "../schemas/Task.js"


const getTasks = async(req, res) => {
    const tasks = await Task.findAll({
        where: {
            userId: req.userId // solo lista las tareas del usuario logueado
        }
    })
    res.json(tasks)
}

const getTask = (req, res) => res.send('obteniendo tarea unica')

const createTask = async (req, res) => {
    const { name, done } = req.body
    const newTask = await Task.create({
        name,
        done,
        userId: req.userId //req.userId viene del middleware de autenticacion
    })
    res.json(newTask)
}

const updateTask = (req, res) => res.send('modificando tarea')

const deleteTask = (req, res) => res.send('eliminando tarea')

export {getTasks, getTask, createTask, updateTask, deleteTask }


