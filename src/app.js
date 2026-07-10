const express = require("express");
const cartaRoutes = require("./routes/carta.routes");
const authRoutes = require("./routes/auth.routes");
const emailRoutes = require("./routes/email.router");
const errorMiddleware = require("./middlewares/error.middleware");

const app= express();

app.use(express.json());

app.use("/api/carta", cartaRoutes);
app.use("/api", authRoutes);
app.use("/api", emailRoutes); 
app.use(errorMiddleware);


module.exports = app;
