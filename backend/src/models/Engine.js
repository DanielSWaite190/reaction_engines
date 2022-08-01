const {Sequelize, sequelize} = require('../db');
// const { Sequelize } = require('sequelize');

const Engine = sequelize.define('engine', {
  name: Sequelize.STRING,
  cycle_type: Sequelize.STRING,
  Thrust: Sequelize.INTEGER,
  specific_impulse: Sequelize.INTEGER
});

module.exports = Engine;