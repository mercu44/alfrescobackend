
const cors = require("cors");

const frontendOnly = cors({
    origin: [
        "http://localhost:5000",

        "http://127.0.0.1:5500",
        "https://alfrescorestaurante.es"
    ]
});

module.exports = frontendOnly;