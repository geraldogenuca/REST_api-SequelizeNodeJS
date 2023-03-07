// require('dotenv').config();

import Sequelize from 'sequelize';
// import config_db from '../config/config_db';

// const connection_db = new Sequelize(config_db);
const connection_db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'dialect': process.env.DB_DIALECT
});


module.exports = connection_db;