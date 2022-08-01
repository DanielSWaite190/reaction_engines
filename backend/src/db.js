const { Sequelize } = require('sequelize');
const path = require('path');
const debug = require('debug')('app:sequelize');

const sequelize = new Sequelize('engines', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = {
  sequelize,
  Sequelize
};
