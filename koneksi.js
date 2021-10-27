const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kasirdb', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

try {
    sequelize.authenticate();
    sequelize.sync({ alter: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  module.exports = sequelize;
