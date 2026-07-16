const { text } = require("express");
const emailService = require("../services/email.service");
const {generarTexto}= require("../templates/cliente");

async function gestionarCorreo(req,res,next){
    try{
        const {
            nombre,
            email,
            telefono,
            fecha,
            hora,
            personas,
            mensaje,
            idioma
        } = req.body;
        const restaurante = await emailService.enviarCorreo(
            "alfresco@alfrescorestaurante.es",
            "Nueva solicitud de reserva de "+ nombre,
            `
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
    <tr>
        <td align="center">

            <!-- Cabecera -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#6CB87B;">
                <tr>
                    <td align="center" style="padding:40px 20px;">
                        <h1 style="margin:0;font-size:36px;font-weight:300;color:#ffffff;">
                            Restaurante Alfresco
                        </h1>
                    </td>
                </tr>
            </table>

            <!-- Contenedor -->
            <table role="presentation"
                   width="100%"
                   cellpadding="0"
                   cellspacing="0"
                   border="0"
                   style="max-width:650px;background:#ffffff;margin:30px auto;border:1px solid #ececec;">

                <tr>
                    <td style="padding:35px 28px;">

                        <h2 style="margin:0 0 35px;text-align:center;font-size:34px;font-weight:300;color:#222;line-height:1.2;">
                            Nueva solicitud de reserva
                        </h2>

                        <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 30px;text-align:center;">
                            Se ha recibido una nueva solicitud de reserva desde la página web.
                        </p>

                        <table role="presentation"
                               width="100%"
                               cellpadding="12"
                               cellspacing="0"
                               border="0"
                               style="background:#fafafa;border:1px solid #ececec;font-size:16px;color:#555;">

                            <tr>
                                <td width="35%">
                                    <strong>Nombre</strong>
                                </td>

                                <td>
                                    ${nombre}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Email</strong>
                                </td>

                                <td>
                                    ${email}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Teléfono</strong>
                                </td>

                                <td>
                                    ${telefono}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Fecha</strong>
                                </td>

                                <td>
                                    ${fecha}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Hora</strong>
                                </td>

                                <td>
                                    ${hora}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Personas</strong>
                                </td>

                                <td>
                                    ${personas}
                                </td>
                            </tr>

                            <tr>
                                <td valign="top">
                                    <strong>Observaciones</strong>
                                </td>

                                <td>
                                    ${mensaje}
                                </td>
                            </tr>

                        </table>

                        <table role="presentation"
                               width="100%"
                               cellpadding="0"
                               cellspacing="0"
                               border="0"
                               style="margin-top:35px;">

                            <tr>

                                <td style="background:#F6FBF7;border-left:4px solid #6CB87B;padding:18px;color:#555;line-height:1.8;">

                                    <strong>Acción requerida</strong><br><br>

                                    Contacta con el cliente lo antes posible para confirmar la disponibilidad de la mesa y finalizar la reserva.

                                </td>

                            </tr>

                        </table>

                    </td>

                </tr>

            </table>

            <!-- Footer -->

            <table role="presentation"
                   width="100%"
                   cellpadding="0"
                   cellspacing="0"
                   border="0">

                <tr>

                    <td align="center"
                        style="padding:20px;color:#999;font-size:13px;line-height:1.8;">

                        Este mensaje ha sido enviado automáticamente desde<br>

                        <strong>Restaurante Alfresco</strong>

                    </td>

                </tr>

            </table>

        </td>
    </tr>
</table>`
            

        );
        const texto =generarTexto(
            idioma,
            {
                nombre,
                fecha,
                hora,
                personas
            }
        );
        const cliente = await emailService.enviarCorreo(
            email,
            texto.asunto, 
            texto.html
           );
    
        res.status(200).json({
            mensaje: "Correo enviado"
        });
    }catch(err){
        next(err);
    }
}



module.exports = {
    gestionarCorreo
}