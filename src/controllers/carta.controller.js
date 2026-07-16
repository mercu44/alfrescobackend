
const cartaServicio = require("../services/carta.service");

async function obtenerCarta(req,res,next){
    try{
        const idioma = req.query.idioma;
        const carta = await cartaServicio.obtenerCarta(idioma);
        res.json(carta);
    }catch(err){
        next(err);
    }
    
}

async function crearPlato(req,res,next){
    try{
        const nombre = req.body.nombre;
        const idioma = req.body.idioma;
        const descripcion = req.body.descripcion;
        const precio = req.body.precio;
        const categoria = req.body.categoria;
        const orden = req.body.orden;
        const plato = await cartaServicio.crearPlato(nombre,idioma,descripcion,precio,categoria,orden);
        res.status(201).json(plato);
    }catch(err){
        next(err);
    }

}
async function importarCarta(req,res,next){
    try{
        const platos = req.body;
        for(const plato of platos){
            await cartaServicio.crearPlato(
                plato.nombre,
                plato.idioma,
                plato.descripcion,
                plato.precio,
                plato.categoria,
                plato.orden
            );
        }
        res.status(201).json({
            mensaje:"Carta importada correctamente"
    })}catch(err){
        next(err);
    }
}
async function editarPlato(req,res,next){
    try{
        const nombreAntiguo = req.params.nombre;
        const idioma = req.params.idioma;
        let {
            nombre = null,
            descripcion= null,
            precio= null,
            orden=null
        } = req.body;
        nombre = nombre || null;
        descripcion = descripcion || null;

        precio = precio === ""
            ? null
            : Number(precio);

        orden = orden === ""
            ? null
            : Number(orden);
        const plato = await cartaServicio.editarPlato(nombreAntiguo,idioma,nombre,descripcion,precio,orden);
        res.status(200).json(plato);}catch(err){
        next(err);
    }
}


async function eliminarPlato(req,res,next){
    try{const nombre = req.params.nombre;
    const idioma = req.params.idioma;

    const plato = await cartaServicio.eliminarPlato(nombre, idioma);
    res.status(200).json(plato);}
    catch(err){
        next(err);
    }
}

async function eliminarCarta(req,res,next){
    try{
        const idioma = req.params.idioma;
        await cartaServicio.eliminarCarta(idioma);
        res.status(200).json({
        mensaje:"Carta eliminada correctaemnte"
    })}catch(err){
        next(err);
    }
}
module.exports = {
    obtenerCarta,
    crearPlato,
    importarCarta,
    editarPlato,
    eliminarPlato,
    eliminarCarta
};