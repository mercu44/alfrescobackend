const express = require("express")
const calendarioController = require("../controllers/calendario.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/disponibilidad/horas", calendarioController.obtenerHoras); //implementado
router.get("/disponibilidad/todasHoras", calendarioController.obtenerTodasHoras); //implementado
router.get("/disponibilidad/dias", calendarioController.obtenerDias); //implementado

router.post("/addFecha", authMiddleware, calendarioController.addFecha);
router.post("/addHora", authMiddleware, calendarioController.addHora);
router.post("/addMultiplesHoras", authMiddleware, calendarioController.addMultiplesHoras);

router.delete("/eliminarFecha", authMiddleware, calendarioController.eliminarFecha);
router.delete("/eliminarHora", authMiddleware,  calendarioController.eliminarHora);


module.exports = router;