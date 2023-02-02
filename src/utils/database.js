
const { Sequelize } = require('sequelize');

// crear una instancia con parametros de configuracion base de dato
// un objeto de configuracion ---> credenciales de mi base de datos

const db = new Sequelize({
    database: "cursoapi",  //Base de dato nombre
    username: "postgres", 
    host: "localhost",
    port: "5432",
    password: "ruut", // password 
    dialect: "postgres", // base de dato que estamos usando
    logging: false,
});

module.exports =  db;