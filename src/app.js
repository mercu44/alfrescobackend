const express = require("express");
const cartaRoutes = require("./routes/carta.routes");
const authRoutes = require("./routes/auth.routes");
const app= express();

app.use(express.json());

app.use("/api/carta", cartaRoutes);
app.use("/api", authRoutes);


module.exports = app;
