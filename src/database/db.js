import { Sequelize } from 'sequelize';

// Reemplaza 'nombre_de_tu_basedatos', 'tu_usuario' y 'tu_contraseña' con tus datos reales
export const sequelize = new Sequelize('db_crud_test', 'keko', 'pass', {
  host: 'localhost',
  dialect: 'postgres'
});



//psql -U keko -d db_crud_test  