const express= require("express");
const emailController = require("../controllers/email.controller");
const localMiddleware = require("../middlewares/local.middleware");
const router = express.Router();


router.post("/gestionarCorreo", localMiddleware, emailController.gestionarCorreo);


module.exports = router;