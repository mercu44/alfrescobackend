const pool = require("../database/connection");

async function obtenerUsuario(usuario){
    const resultado = await pool.query(
     `
     SELECT *
     FROM usuarios
     WHERE usuario = $1
    ` , [usuario]
    );
 
    return resultado.rows[0];
}

module.exports = {
    obtenerUsuario
};