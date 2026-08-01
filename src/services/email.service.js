const { Resend } = require("resend");

const resend = new Resend(
    process.env.RESEND_API_KEY
);

async function enviarCorreo(destinatario, asunto, html) {

    const resultado = await resend.emails.send({
        from: "alfresco@alfrescorestaurante.es",
        to: destinatario,
        subject: asunto,
        html: html
    });
    if (resultado.error){
        throw new Error(resultado.error.message);
    }
    return resultado.data;
}

module.exports = {
    enviarCorreo
};