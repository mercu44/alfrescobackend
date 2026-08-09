const express = require("express");
const reservasController = require("../controllers/reservas.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router= express.Router();

router.get("/reservas", reservasController.obtenerReservas);
router.put("/reservas/cambiarEstadoReserva", reservasController.cambiarEstadoReserva);
router.put("/reservas/modificarReserva", reservasController.modificarReserva);
router.get("/reservas/:fecha",reservasController.obtenerReservasDia)
router.get("/clientes", reservasController.obtenerTodosClientes);
router.get("/clientes/:id", reservasController.obtenerEstadisticasCliente);


module.exports = router;