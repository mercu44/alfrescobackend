const jwt = require("jsonwebtoken");

function authMiddleware(req,res,next){
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                mensaje:"Token no proporcionado"
            })
        }
        const [tipo, token] = authHeader.split(" ");
        if(tipo !== "Bearer"){
            return res.status(401).json({
                mensaje: "Formato de token incorrecto"
            });
        }
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.usuario = payload;
        next();
    }catch{
        return res.status(401).json({
            mensaje:"Token inválido"
        });
    }
}

module.exports = authMiddleware;