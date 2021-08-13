// -- db.js para la Base Datos--

// Importar sequelize
import Sequelize from 'sequelize';

// Importar dotenv
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

console.log(process.env.BD_NOMBRE)
console.log(process.env.BD_USER)
console.log(process.env.BD_PASS)
console.log(process.env.BD_HOST)
console.log(process.env.BD_PORT)

// Configurar db para uso con variables de entorno (deployment)
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorAliases: false
});

// // Configurar db para uso local
// const db = new Sequelize('agenciaviajes','root','admin', {
//     host: '127.0.0.1',
//     port: '3306',
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     },
//     pool: {
//         max:5,
//         min:0,
//         acquire: 30000,
//         idle: 10000,
//     },
//     operationAliases: false
// });

// Exportar db
export default db;