const express = require("express");
const cartaController = require("../controllers/carta.controller");

const router = express.Router();

router.get("/",  cartaController.obtenerCarta);
router.post("/", cartaController.crearPlato);
router.post("/importar", cartaController.importarCarta)
router.put("/:nombre/:idioma", cartaController.editarPlato);
router.delete("/:nombre/:idioma", cartaController.eliminarPlato);
router.delete("/:idioma", cartaController.eliminarCarta);
module.exports = router;