const express = require("express")
const calendarioController = require("../controllers/calendario.controller");
const router = express.Router();

router.get("/disponibilidad/horas", calendarioController.obtenerHoras);
router.get("/disponibilidad/dias", calendarioController.obtenerDias);
router.post("/addFecha", calendarioController.addFecha);
router.post("/addHora", calendarioController.addHora);
router.delete("/eliminarFecha", calendarioController.eliminarFecha);
router.delete("/eliminarHora", calendarioController.eliminarHora);


module.exports = router;