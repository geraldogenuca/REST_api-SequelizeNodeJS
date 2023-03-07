import express from 'express';
import morgan from 'morgan';
import connection_db from './database/index';
require('dotenv').config();

const app = express();

// 


connection_db.sync().then(() => console.log('Data Base connected successfully!!!'))

app.use('/public', express.static('../public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))


module.exports = app;