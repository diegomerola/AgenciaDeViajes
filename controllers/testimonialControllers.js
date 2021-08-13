// -- Controladores --
import { Testimonial } from '../models/Testimoniales.js';

// Variables
// const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const guardarTestimonial = async (req, res) => {
    console.log(req.body)

    // Obtener los datos del body y crear variables:
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    // Validar
    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre esta vacio' });
    }
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El correo esta vacio' });
    }
    // else if(!er.test(correo)){
    //     errores.push({ mensaje: 'Ingrese un mail correcto' });
    // }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje esta vacio' });
    }
    
    // Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();

    // Mostrar la vista con errores
    if (errores.length > 0) {
        // Renderizar   
        res.render('testimoniales.pug', {
            // Pasar variables a la vista
            pagina: 'Enviar testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }
    else {
        // Almacenar en la Base de DAtos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            console.log(nombre);
            console.log(correo)
            console.log(mensaje)
            res.redirect('/testimoniales')
            
        } catch (error) {
            console.log(error)
            
        }
    }

}

export { guardarTestimonial }