const reservasService = require("../services/reservas.service");


async function obtenerReservas(req,res,next){
    try{
        const estado = req.query.estado;
        const reservas = await reservasService.obtenerReservas(estado);
        let reservasYCliente = [];
        for(const reserva of reservas){ 
            const cliente = await reservasService.obtenerDatosCliente(reserva.cliente_id);
            reservasYCliente.push({reserva,cliente});
        }
        res.json(reservasYCliente);
    }catch(err){
        next(err);
    }

}


module.exports = {
    obtenerReservas
}