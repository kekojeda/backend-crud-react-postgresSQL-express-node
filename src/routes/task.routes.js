import { Router } from "express"


const router = Router();


router.get('/task', (req, res) => res.send('obteniendo tareas'))

router.get('/task/:id', (req, res) => res.send('obteniendo tarea unica'))

router.post('/task', (req, res) => res.send('creando tarea'))

router.put('/task/:id', (req, res) => res.send('modificando tarea'))

router.delete('/task/:id', (req, res) => res.send('eliminando tarea'))


export default router