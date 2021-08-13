// --Importar controladores del modelo --
import {Viaje} from '../models/Viajes.js';
import {Testimonial} from '../models/Testimoniales.js';


const paginaInicio = async (req, res) => { // (req: la consulta que se hace al servidor - res: lo que devuelve el servidor)
    try {
        // Consulta a la BD los primeros 3 viajes:
        const viajes = await Viaje.findAll({ limit: 3 });
        console.log(viajes)

        // Consultar a la BD los primeros 3 testimoniales
        const testimoniales = await Testimonial.findAll({limit: 3})

        // Renderizar inicio.pug:  
        res.render('inicio.pug', {

            // Pasar variables a inicio.pug:
            pagina: 'Inicio',
            clase: 'home',
            viajes: viajes,
            testimoniales: testimoniales
        });

    } catch (error) {
        console.log(error)
    }

}

const paginaNosotros = (req,res) => {
    // Renderizar inicio.pug:
    res.render('nosotros.pug',{

        // Pasar variables a nosotros.pug:
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req,res) => {
    // Hacer consulta a la BD:
    const viajes = await Viaje.findAll();

    // Renderizar viajes.pug:
    res.render('viajes.pug',{

        // Pasar variables a viajes.pug:
        pagina: 'Próximos viajes', 
        viajes: viajes,
    });
}

const paginaDetalleViaje = async (req,res) => {
    
    // Obtener el params:
    const destino = req.params;
    console.log(destino.slug);

    try {
        // Hacer consulta a la BD:
        const viaje = await Viaje.findOne({where:{slug:destino.slug}})
        
            // Renderizar viaje.pug:
            res.render('viaje',{

                // Pasar variables a viaje.pug:
                pagina:`Informacion del viaje a ${viaje.titulo}`,
                viaje: viaje
        })
        
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = async (req,res) => {
    try {
        // Hacer consulta a la BD:
        const testimoniales = await Testimonial.findAll();

        // Renderizar testimoniales.pug:
        res.render('testimoniales.pug',{

            // Pasar variables:
            pagina: 'Testimoniales',
            testimoniales: testimoniales
        });
        
    } catch (error) {
        console.log(error);
    }
    
}


export {
    paginaInicio, paginaNosotros, paginaViajes, paginaDetalleViaje, paginaTestimoniales
}