const {Sequelize, sequelize} = require('../db');
// const { Sequelize } = require('sequelize');

const Engine = sequelize.define('engine', {
  name: Sequelize.STRING,
});

module.exports = Engine;