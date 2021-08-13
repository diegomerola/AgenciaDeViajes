// -- Router: Se encarga de registrar todas las URL'S que la aplicacion soporta --

// Importar express
    import express from 'express';

// Importar controladores
    import { paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales } from '../controllers/paginasControllers.js';

    import { guardarTestimonial } from '../controllers/testimonialControllers.js';

// Ejecutar el metodo.Router() de express:
    const router = express.Router();

// Definir metodo, ruta y ejecutar el controlador:
    
    router.get('/', paginaInicio) //http://localhost:4000/
       
    router.get('/nosotros', paginaNosotros ) //http://localhost:4000/nosotros

    router.get('/viajes', paginaViajes) //http://localhost:4000/viajes

    router.get('/viajes/:slug', paginaDetalleViaje) //http://localhost:4000/viajes/:slug

    router.get('/testimoniales', paginaTestimoniales)  //http://localhost:4000/testimoniales

    router.post('/testimoniales', guardarTestimonial)  //http://localhost:4000/testimoniales
    

// Exporta router para ser utilizado en index.js
    export default router;
