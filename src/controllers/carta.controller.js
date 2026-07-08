
const cartaServicio = require("../services/carta.service");

async function obtenerCarta(req,res){
    const idioma = req.query.idioma;
    const carta = await cartaServicio.obtenerCarta(idioma);
    res.json(carta);
}

async function crearPlato(req,res){
    const nombre = req.body.nombre;
    const idioma = req.body.idioma;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const categoria = req.body.categoria;
    const orden = req.body.orden;
    const plato = await cartaServicio.crearPlato(nombre,idioma,descripcion,precio,categoria,orden);
    res.status(201).json(plato);

}
async function importarCarta(req,res){
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
    })
}
async function editarPlato(req,res){
    const nombreAntiguo = req.params.nombre;
    const idioma = req.params.idioma;
    const {
        nombre = null,
        descripcion= null,
        precio= null,
        orden=null
    } = req.body;
    const plato = await cartaServicio.editarPlato(nombreAntiguo,idioma,nombre,descripcion,precio,orden);
    res.status(200).json(plato);
}


async function eliminarPlato(req,res){
    const nombre = req.params.nombre;
    const idioma = req.params.idioma;

    const plato = await cartaServicio.eliminarPlato(nombre, idioma);
    res.status(200).json(plato);
}
async function eliminarCarta(req,res){
    const idioma = req.params.idioma;
    await cartaServicio.eliminarCarta(idioma);
    res.status(200).json({
        mensaje:"Carta eliminada correctaemnte"
    })
}
module.exports = {
    obtenerCarta,
    crearPlato,
    importarCarta,
    editarPlato,
    eliminarPlato,
    eliminarCarta
};