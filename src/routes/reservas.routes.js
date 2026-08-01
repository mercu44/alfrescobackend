const express = require("express");
const reservasController = require("../controllers/reservas.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router= express.Router();

router.get("/reservas", reservasController.obtenerReservas);





module.exports = router;