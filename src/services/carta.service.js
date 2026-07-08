
const pool = require("../database/connection");

async function obtenerCarta(idioma){
    const resultado = await pool.query(
        `SELECT * 
        FROM carta
        WHERE idioma = $1
        ORDER BY orden ASC;
        `,[idioma]
    );
    return resultado.rows;
}

async function crearPlato(nombre,idioma,descripcion,precio,categoria,orden){
    const resultado = await pool.query(
        `
        INSERT INTO carta(nombre,idioma, descripcion,precio,categoria,orden)
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING *;
        `,
        [nombre,idioma,descripcion,precio,categoria,orden]
    );
    return resultado.rows[0];
}

async function editarPlato(nombreAntiguo, idioma,nombre, descripcion, precio, orden){
    const resultado = await pool.query(
        `
        UPDATE carta
        set
            nombre = COALESCE($3, nombre) 
            descripcion= COALESCE($4, descripcion)
            precio= COALESCE($5, precio)
            orden= COALESCE($6, orden)
        WHERE nombre = $1 and idioma = $2
        RETURNING *;
        `,
        [nombreAntiguo, idioma,nombre,descripcion,precio,orden]
    );
    return resultado.rows[0];
}

async function eliminarPlato(nombre, idioma){
     const resultado = await pool.query(
        `
        DELETE FROM carta
        WHERE nombre = $1 and idioma =$2
        RETURNING *;
        `,
        [nombre, idioma]
    );
    return resultado.rows[0];
}
async function eliminarCarta(idioma){
    await pool.query(
        `
        DELETE FROM carta
        WHERE idioma = $1
        `, [idioma]
    );
}
module.exports = {
    obtenerCarta,
    crearPlato,
    editarPlato,
    eliminarPlato,
    eliminarCarta
};