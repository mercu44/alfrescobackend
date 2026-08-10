const { text } = require("express");
const emailService = require("../services/email.service");
const reservasService = require("../services/reservas.service");
const {generarTexto}= require("../templates/cliente");
const obtenerMensajeRestaurante = require("../templates/restaurante/restaurante");
const { randomUUID} = require("crypto");
async function gestionarCorreo(req,res,next){
    try{
        const {
            nombre,
            email,
            telefono,
            fecha,
            hora,
            personas,
            mensaje,
            idioma
        } = req.body;

        const [prefijoNuevo,telefonoNuevo] = telefono.split(" ");
        let cliente = await reservasService.obtenerCliente (telefonoNuevo,prefijoNuevo, email);
        if( !cliente){
            cliente = await reservasService.insertarCliente(telefonoNuevo,prefijoNuevo,email,nombre, null, '');
        }
        const token = randomUUID();
        const reserva = await reservasService.insertarReserva(cliente.id, null, fecha, hora, null, 'pendiente', token, 'web', personas, false)


        const restauranteEmail = await emailService.enviarCorreo(
            "alfresco@alfrescorestaurante.es",
            `Nueva solicitud de reserva de ${nombre}`,
            obtenerMensajeRestaurante( nombre,email,telefono,fecha,hora,personas,mensaje)
        );
        const texto =generarTexto(
            idioma,
            {
                nombre,
                fecha,
                hora,
                personas
            }
        );
        const clienteEmail = await emailService.enviarCorreo(
            email,
            texto.asunto, 
            texto.html
           );
        
        res.status(200).json({
            mensaje: "Correo enviado"
        });
    }catch(err){
        next(err);
    }
}



module.exports = {
    gestionarCorreo
}