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
async function obtenerReservasDia(req,res,next){
    try{
        const fecha = req.params.fecha;
        const reservas = await reservasService.obtenerReservasDia(fecha);
        let reservasYCliente = [];
        for(const reserva of reservas){ 
            const cliente = await reservasService.obtenerDatosCliente(reserva.cliente_id);
            reservasYCliente.push({reserva,cliente});
        }
        res.status(200).json(reservasYCliente);
    }catch(err){
        next(err);
    }


}
async function cambiarEstadoReserva(req,res,next){
    try{
        const {id,estado} = req.body;
        const resultado = await reservasService.cambiarEstadoReserva(id,estado);
        res.status(200).json({ ok: true });
    }catch(err){
        next(err);
    }
}
async function modificarReserva(req,res,next){
    try{
        const {id,idCliente,idMesa,fecha, horaInicio, horaFin, estado, tipo, personas} = req.body;
        const resultado = await reservasService.modificarReserva(id,idCliente,idMesa,fecha, horaInicio, horaFin, estado, tipo, personas);
        console.log("modificarReserva "+ resultado);
        res.status(200).json({ ok: true });
    }catch(err){
        next(err);
    }
}
async function obtenerTodosClientes(req,res,next){
    try{
        const resultado = await reservasService.obtenerTodosClientes();
        res.json(resultado);
    }catch(err){
        next(err);
    }
}
async function modificarCliente(req,res,next){
    try{
        const {telefono, prefijo, correo, nombre, nacionalidad, score, comentarios} = req.body;
        const id = req.params.id;
        const resultado = await reservasService.modificarCliente(id, telefono, prefijo, correo, nombre, nacionalidad, score, comentarios)
        res.status(200).json({ok:true});
    }catch(err){
        next(err);
    }
}
async function eliminarCliente(req,res,next){
    try{
        const id = req.params.id;
        const resultado = await reservasService.eliminarCliente(id);
        res.status(200).json({ok:true});
    }catch(err){
        next(err);
    }
}
/*
async function modificarCliente(req,res,next){
    try{
        const resultado = await reservasService.
        res.json(resultado);
    }catch(err){
        next(err);
    }
}
    */
async function obtenerEstadisticasCliente(req,res,next){
    try{
        const id = req.params.id;
        const resultado = await reservasService.obtenerEstadisticasCliente(id);
        res.json(resultado);
    }catch(err){
        next(err);
    }
}

module.exports = {
    obtenerReservas,
    obtenerReservasDia,
    cambiarEstadoReserva,
    modificarReserva,
    obtenerTodosClientes,
    obtenerEstadisticasCliente,
    modificarCliente,
    eliminarCliente
}