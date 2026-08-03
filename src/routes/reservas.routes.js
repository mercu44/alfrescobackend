const express = require("express");
const reservasController = require("../controllers/reservas.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router= express.Router();

router.get("/reservas", reservasController.obtenerReservas);
router.post("/reservas/cambiarEstadoReserva", reservasController.cambiarEstadoReserva);
router.get("/clientes", reservasController.obtenerTodosClientes);



module.exports = router;