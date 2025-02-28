const getTasks = (req, res) => res.send('obteniendo tareas')

const getTask = (req, res) => res.send('obteniendo tarea unica')

const createTask = (req, res) => res.send('creando tarea')

const updateTask = (req, res) => res.send('modificando tarea')

const deleteTask = (req, res) => res.send('eliminando tarea')

export {getTasks, getTask, createTask, updateTask, deleteTask }


