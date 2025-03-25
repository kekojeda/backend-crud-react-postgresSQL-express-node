import { Router } from "express"
import { createTask, deleteTask, updateTask, getTask, getTasks } from "../controllers/task.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";


const router = Router();


router.get('/task', isAuth, getTasks)

router.get('/task/:id', getTask)

router.post('/task',isAuth, createTask)

router.put('/task/:id', updateTask)

router.delete('/task/:id', deleteTask)


export default router