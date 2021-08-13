// -- Index.js para configuracion --

// Importar dependencias por modulos (agregar "type": "module" a package.json):  
    // Express
    import express from 'express';

    // Crear instancia de app:
    const app = express();

    // Router
    import router from './routes/index.js';

    // Base de datos
    import db from './config/database.js';

    // Importar dotenv
    import dotenv from 'dotenv';
    dotenv.config({path: 'variables.env' });

// Conectar a la Base de Datos
    // db.authenticate()
    //     .then(() => console.log('Base de datos conectada'))
    //     .catch(error => console.log(error));
    // try {
    //     await db.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }

// Metodos de app:
    
    // Crear variables en el ambito local y pasarlas hacia las vistas
    app.use('/', (req,res,next)=>{
        // Obtener el anio actual
        const year = new Date();
        res.locals.actualYear = year.getFullYear();

        // Agregar titulo a las paginas
        res.locals.nombreSitio = 'Agencia de Viajes';

        // Pasar al siguiente middleware
        return next();
    });
    
    // Habilitar las vistas con pug:
    app.set('view engine','pug');

    // Definir la carpeta publica
    app.use(express.static('public'));

// Crear conexion para el servidor: 
    // Definir port y host de forma automatica. Para el deployment || Para la conexion local
    const HOST = process.env.HOST || '0.0.0.0';
    const PORT = process.env.PORT || 3000;

    // Agregar body-parser para leer los datos del formulario
    app.use(express.urlencoded({ extended: true }));
    
    // Ejecutar router: (Usa todos los metodos de router -GET,POST,PUT,DELETE-)
    app.use('/', router);

    // Establecer conexion con el servidor:
    app.listen(PORT , HOST, () =>{  
        console.log(`El servidor esta funcionando en host:${HOST} y puerto:${PORT}`);
    })