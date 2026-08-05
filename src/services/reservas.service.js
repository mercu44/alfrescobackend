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
async function modificarReserva(id,clienteId, mesaId, fecha, horaInicio, horaFin, estado, tipoReserva, personas){
    const resultado = await pool.query(
        `
        UPDATE Reserva
        SET cliente_id = $2,
        mesa_Id = $3,
        fecha = $4,
        hora_inicio = $5,
        hora_fin = $6, 
        estado = $7, 
        tipo_reserva = $8,
        personas =  $9
        WHERE id = $1
        RETURNING *;
        `, [id,clienteId, mesaId, fecha, horaInicio, horaFin, estado, tipoReserva, personas]
    );
    return resultado.rows[0];
}
async function obtenerReservasDia(fecha){
    const resultado = await pool.query(
        `
        SELECT * 
        FROM Reserva
        WHERE fecha = $1    
        `, [fecha]
    );
    return resultado.rows[0];
}
async function obtenerEstadisticasCliente(id){
    const resultado = await pool.query(
        ` 
        SELECT COUNT (*) as total_reservas,
        COUNT (*) FILTER( WHERE estado = "cancelada") as canceladas,
        COUNT (*) FILTER( WHERE estado = "no-show") as no-show
        FROM Reserva
        WHERE cliente_id = $1
        
        `,[id]
    );
    return resultado.rows[0];
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
    obtenerReservasDia,
    modificarReserva,
    insertarCliente,
    obtenerCliente,
    obtenerEstadisticasCliente,
    obtenerDatosCliente,
    obtenerTodosClientes,
    insertarClienteMesaFavorita,
    modificarClienteMesaFavorita
};