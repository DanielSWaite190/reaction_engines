const {Sequelize, sequelize} = require('../db');

const Engine = sequelize.define('engine', {
  name: Sequelize.STRING,
  cycle_type: Sequelize.STRING,
  fule_type: Sequelize.STRING,
  thrust: Sequelize.INTEGER,
  thrust_to_weight: Sequelize.STRING,
  specific_impulse_cl: Sequelize.INTEGER,
  specific_impulse_vac: Sequelize.INTEGER,
  pressure: Sequelize.INTEGER,
  image: Sequelize.STRING
});

module.exports = Engine;