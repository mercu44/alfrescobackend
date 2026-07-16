const authServicio = require("../services/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(req,res,next){
    try{
    const usuario = req.body.usuario;
    const password = req.body.password;
    const usuarioBD=await authServicio.obtenerUsuario(usuario);


    if(!usuarioBD){
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        })
    }
    const passwordCorrecta =  await bcrypt.compare(
        password,
        usuarioBD.password
    );
    if (!passwordCorrecta){
        return res.status(401).json({
            mensaje: "Contraseña incorrecta"
        })
    }
        
    const token = jwt.sign(
        {
            usuario: usuarioBD.usuario
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "24h"
        }

    )
    res.status(200).json({
        token
     })
     }catch(err){
        next(err);
     }
            
}
async function me(req,res,next){
    try{
        res.json(req.usuario);
    }catch(err){
        next(err);
    }
}

    


module.exports = {
    login,
    me
};