const express = require("express");
const cartaController = require("../controllers/carta.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/",  cartaController.obtenerCarta);
router.post("/",authMiddleware, cartaController.crearPlato);
router.post("/importar", authMiddleware, cartaController.importarCarta)
router.put("/:nombre/:idioma",authMiddleware, cartaController.editarPlato);
router.delete("/:nombre/:idioma", authMiddleware,cartaController.eliminarPlato);
router.delete("/:idioma", authMiddleware,  cartaController.eliminarCarta);
module.exports = router;