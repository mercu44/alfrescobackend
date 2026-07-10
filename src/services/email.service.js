const { Resend } = require("resend");

const resend = new Resend(
    process.env.RESEND_API_KEY
);

async function enviarCorreo(destinatario, asunto, html) {

    return await resend.emails.send({

        from: "onboarding@resend.dev",

        to: destinatario,

        subject: asunto,

        html: html

    });

}

module.exports = {
    enviarCorreo
};