import sequelize from './db.js';

sequelize.authenticate()
  .then(() => {
    console.log('¡Conexión establecida correctamente!');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });