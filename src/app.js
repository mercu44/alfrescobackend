const express = require("express");
const cartaRoutes = require("./routes/carta.routes");

const app= express();

app.use(express.json());

app.use("/api/carta", cartaRoutes);


module.exports = app;
