const pool = require("../database/connection")

async function obtenerDias(){
    const resultado = await pool.query (
        `
            SELECT TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha
            FROM dias_no_disponibles 
            ORDER BY fecha ASC;
        `)
        return resultado.rows; 
}

async function obtenerHoras(fecha){
    const resultado = await pool.query(
        `
            SELECT TO_CHAR(hora, 'HH24:MI') AS hora
            FROM horas_no_disponibles
            WHERE fecha = $1 
            ORDER BY fecha ASC;
        
        `,[fecha]
    )
    return resultado.rows;
}


async function obtenerTodasHoras(){
    const resultado = await pool.query(
        `
            SELECT TO_CHAR(fecha, 'YYYY-MM-DD') AS fecha, TO_CHAR(hora, 'HH24:MI') AS hora
            FROM horas_no_disponibles
            ORDER BY fecha ASC;
        
        `,
    )
    return resultado.rows;
}
async function insertarFecha(fecha){
    const resultado = await pool.query(
        ` 
            INSERT INTO dias_no_disponibles(fecha) 
            VALUES ($1)
            RETURNING *
        `,[fecha]
    )
    return resultado.rows[0];
}
async function insertarHora(fecha,hora){
    const resultado = await pool.query(
        ` 
            INSERT INTO horas_no_disponibles(fecha,hora)
            VALUES ($1, $2)
            RETURNING *
        
        `,[fecha, hora]
    )
    return resultado.rows[0];
}
async function eliminarFecha(fecha){
    const resultado = await pool.query(
        `
        DELETE FROM dias_no_disponibles
        WHERE fecha = $1
        RETURNING *
        `, [fecha]
    )
     console.log(resultado.rows);
    return resultado.rows[0];
}
async function eliminarHora(fecha,hora){
    const resultado = await pool.query(
        `
        DELETE FROM horas_no_disponibles
        WHERE fecha = $1 and hora= $2
        RETURNING *
        `, [fecha, hora]
    )
     console.log(resultado.rows);
    return resultado.rows[0];
}




module.exports = {
    obtenerDias,
    obtenerHoras,
    obtenerTodasHoras,
    insertarFecha,
    insertarHora,
    eliminarFecha,
    eliminarHora
};