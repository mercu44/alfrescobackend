const express = require("express");
const cartaRoutes = require("./routes/carta.routes");
const authRoutes = require("./routes/auth.routes");
const calendarioRoutes = require("./routes/calendario.routes")
const emailRoutes = require("./routes/email.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const cors = require("cors");


const app= express();
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
app.use(
    cors({
        origin: true
    })
);

app.use(express.json());

app.use("/api/carta", cartaRoutes);
app.use("/api", authRoutes);
app.use("/api", emailRoutes); 
app.use("/api", calendarioRoutes);
app.use(errorMiddleware);


module.exports = app;
