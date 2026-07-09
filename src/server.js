require("dotenv").config()
const app = require("./app");
const pool = require("./database/connection");



async function iniciarServidor(){
    try{
        await pool.query("SELECT NOW()")
        console.log("PostgreSQL conectado");
        app.listen(process.env.PORT, ()=>{
            console.log(`Servidor Iniciado en http://localhost:${process.env.PORT}`);
        })

    }catch(err){
        console.error("Error contectando con PostgreSQL");
        console.error(err);
    }
}
iniciarServidor();