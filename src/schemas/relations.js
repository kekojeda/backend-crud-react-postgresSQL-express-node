// models/relations.js
import { User } from './User.js';
import { Task } from './Task.js';

// Un usuario tiene muchas tareas
User.hasMany(Task, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

// Una tarea pertenece a un usuario
Task.belongsTo(User, {
    foreignKey: 'userId',
    targetKey: 'id'
});
