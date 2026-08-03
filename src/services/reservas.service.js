const pool = require("../database/connection");


//Reserva
async function insertarReserva(clienteId, mesaId, fecha, horaInicio, horaFin, estado, token, tipoReserva, personas, listaEspera){
    const resultado = await pool.query(
        `
        INSERT INTO Reserva( cliente_id, mesa_id, fecha, hora_inicio, hora_fin, estado, token, tipo_reserva, personas, lista_espera)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
        RETURNING *;
        `, [clienteId, mesaId, fecha, horaInicio, horaFin, estado, token, tipoReserva, personas, listaEspera]
    );
    return resultado.rows[0];
}
async function cambiarEstadoReserva(id, estado){
    const resultado = await pool.query(
        `
        UPDATE Reserva
        SET estado = $2
        WHERE id= $1
        RETURNING *;
        `,[id, estado]
    );
    return resultado.rows[0];
}
async function obtenerReservas(estado){
    const resultado = await pool.query(
        `
        SELECT *
        FROM Reserva
        WHERE estado = $1;
        `, [estado]
    );
    return resultado.rows;
}

//Cliente
async function insertarCliente(telefono, prefijo, correo, nombre, nacionalidad, comentarios){
    const resultado = await pool.query(
        `
        INSERT INTO Cliente(telefono, prefijo, correo, nombre, nacionalidad, comentarios)
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING *;
        `,[telefono, prefijo, correo, nombre, nacionalidad,comentarios]
    );
    return resultado.rows[0];
}
async function obtenerCliente(telefono, prefijo, correo){
    let resultado;
    if(!correo || correo.trim() === ""){
        resultado=  await pool.query(`
        SELECT *
        FROM Cliente
        WHERE telefono = $1 AND prefijo = $2
        LIMIT 1;
        `,[telefono, prefijo]);
    }
    else{
    resultado= await pool.query(
        ` 
        SELECT *
        FROM Cliente
        WHERE (telefono = $1 AND prefijo =$2) OR correo = $3
        LIMIT 1;
        `,[telefono,prefijo,correo]
    );
    }
    return resultado.rows[0];
}

async function obtenerDatosCliente(id){
    const resultado = await pool.query(
        ` 
        SELECT *
        FROM Cliente
        WHERE id = $1;
        `, [id]
    );
    return resultado.rows[0];
}

async function obtenerTodosClientes(){
    const resultado = await pool.query(
        ` 
        SELECT *
        FROM Cliente;
        `
    );
    return resultado.rows[0];
}

//ClienteMesaFavorita

async function insertarClienteMesaFavorita(idCliente, idMesa, prioridad){
    const resultado = await pool.query(
        `
        INSERT INTO ClienteMesaFavorita(id_cliente,id_mesa,prioridad)
        VALUES($1,$2,$3)
        RETURNING *;
        `, [idCliente, idMesa, prioridad]
    );
    return resultado.rows[0];
}
async function modificarClienteMesaFavorita(idCliente, idMesa, prioridad){
    const resultado = await pool.query(
        `
        UPDATE ClienteMesaFavorita
        SET prioridad = $3
        WHERE id_cliente = $1 and id_mesa= $2
        RETURNING *;
        `,[idCliente, idMesa,prioridad]
    );
    return resultado.rows[0];
}

module.exports = {
    insertarReserva,
    cambiarEstadoReserva,
    obtenerReservas,
    insertarCliente,
    obtenerCliente,
    obtenerDatosCliente,
    obtenerTodosClientes,
    insertarClienteMesaFavorita,
    modificarClienteMesaFavorita
};