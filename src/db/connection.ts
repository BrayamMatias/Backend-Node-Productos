import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('almacen', 'root', 'pyrit', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;