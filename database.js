//Se importa el modulo de MYSQL
const mysql = require('mysql');
const { promisify }= require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);
//Función que nos dice si la base es conectada correctamente
//Con un if se muestran los posibles errores y los mensajes de cada error
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('La conexion con la base fue cerrada temporalmente.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('La base de datos no se encuentra');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('La base de datos rechazada');
    }
  }

  if (connection) connection.release();
  console.log('La base de datos está conectada');

  return;
});

// Promesa del query  pool
pool.query = promisify(pool.query);

module.exports = pool;
