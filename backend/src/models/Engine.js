const {Sequelize, sequelize} = require('../db');
// const { Sequelize } = require('sequelize');

const Engine = sequelize.define('engine', {
  name: Sequelize.STRING,
  cycle_type: Sequelize.STRING,
  thrust: Sequelize.INTEGER,
  specific_impulse: Sequelize.INTEGER,
  image: Sequelize.STRING
});

module.exports = Engine;