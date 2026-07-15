const calendarioServicio = require("../services/calendario.service");


async function obtenerDias(req,res,next){
    try{
        const resultado = await calendarioServicio.obtenerDias();
        const dias = resultado.map(
            dia => dia.fecha
        );
        res.status(200).json(dias);
    }catch(err){
        next(err);
    }
}
async function obtenerHoras(req,res,next){
    try{
        const fecha = req.query.fecha;
        const resultado = await calendarioServicio.obtenerHoras(fecha);
        const horas = resultado.map(
            h => h.hora
        );
        res.status(200).json(horas);
    }catch(err){
        next(err);
    }
}
async function obtenerTodasHoras(req,res,next){
    try{
        const resultado = await calendarioServicio.obtenerTodasHoras();
         
        res.status(200).json(resultado);
    }catch(err){
        next(err);
    }
}
async function addFecha(req,res,next){
    try{
        const fecha = req.body.fecha;
        const resultado = await calendarioServicio.insertarFecha(fecha);
        res.status(200).json(resultado);

    }catch(err){
        next(err);
    }
}
async function addHora(req,res,next){
    try{
        const fecha = req.body.fecha;
        const hora = req.body.hora;
        const resultado = await calendarioServicio.insertarHora(fecha,hora);
        res.status(200).json(resultado);

    }catch(err){
        next(err);
    }
}
async function eliminarFecha(req,res,next){
    try{
        console.log(req.body);

        const fecha = req.body.fecha;
        const resultado = await calendarioServicio.eliminarFecha(fecha);
        res.status(200).json(resultado);
    }catch(err){
        next(err);
    }
}
async function eliminarHora(req,res,next){
    try{
        console.log(req.body);
        const fecha = req.body.fecha;
        const hora = req.body.hora;

        const resultado = await calendarioServicio.eliminarHora(fecha,hora);
        res.status(200).json(resultado);
    }catch(err){
        next(err);
    }
}
module.exports ={
    obtenerDias,
    obtenerHoras,
    obtenerTodasHoras,
    addFecha,
    addHora,
    eliminarFecha,
    eliminarHora
}