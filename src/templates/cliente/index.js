const plantillaES = require("./es.template");
const plantillaEN = require("./en.template");
const plantillaFR = require("./fr.template");
const plantillaCAT = require("./cat.template");

const idiomas = {
    es: {
        asunto: "Hemos recibido tu solicitud de reserva. Confirmación pendiente",
        plantilla: plantillaES
    },

    en: {
        asunto: "We have received your reservation request. To be confirmed",
        plantilla: plantillaEN
    },

    fr: {
        asunto: "Nous avons reçu votre demande de réservation. À confirmer",
        plantilla: plantillaFR
    },

    cat: {
        asunto: "Hem rebut la teva sol·licitud de reserva. Confirmació pendent",
        plantilla: plantillaCAT
    }
};

function generarTexto(idioma, datos) {

    const configuracion = idiomas[idioma] || idiomas.es;
    const codigo = configuracion.plantilla(datos)
    return {
        asunto: configuracion.asunto,
        html: codigo
    };
}

module.exports = {
    generarTexto
};