function generarCorreoClienteES({nombre,fecha,hora,personas}){
    return `
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

                    <table
                        role="presentation"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="max-width:650px;background:#ffffff;margin:30px auto;border:1px solid #ececec;"
                    >

                        <tr>

                            <td style="padding:35px 28px;">

                                <h2 style="margin:0 0 30px;font-size:34px;font-weight:300;color:#222;text-align:center;line-height:1.2;">
                                    Hemos recibido tu solicitud.
                                </h2>

                                <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 20px;">
                                    Hola <strong>${nombre}</strong>,
                                </p>

                                <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 30px;">
                                    Gracias por solicitar una mesa en <strong>Restaurante Alfresco</strong>.
                                    Hemos recibido correctamente tu solicitud de reserva con los siguientes datos:
                                </p>

                                <table
                                    role="presentation"
                                    width="100%"
                                    cellpadding="12"
                                    cellspacing="0"
                                    border="0"
                                    style="background:#fafafa;border:1px solid #ececec;"
                                >

                                    <tr>
                                        <td width="35%">
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

                                </table>

                                <b style="margin:35px 0 20px;font-size:17px;color:#555;line-height:1.8;">
                                    Nuestro equipo confirmará en breve la disponibilidad.
                                </b>
                                <p>Si la hora que prefieres no esta disponible, le enviaremos otras opciones. Te en cuenta que comenzamos las cenas a partir de las 19h, por lo que responderemos las solicitudes recibidas después de las 18.30 a la mañana siguiente.</p>
                                <p style="margin:0;font-size:17px;color:#555;line-height:1.8;">
                                    Si necesitas modificar cualquier dato o tienes alguna consulta, puedes responder directamente a este correo o mandar un whatsapp al <strong>+34 723838527</str>.
                                </p>

                                <table
                                    role="presentation"
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    style="margin-top:35px;"
                                >

                                    <tr>

                                        <td style="border-top:1px solid #ececec;padding-top:25px;">

                                            <p style="margin:0;font-size:16px;color:#444;">
                                                Muchas gracias.
                                            </p>

                                            <p style="margin:8px 0 0;font-size:16px;color:#444;">
                                                Equipo de Restaurante Alfresco
                                            </p>

                                        </td>

                                    </tr>

                                </table>

                            </td>

                        </tr>

                    </table>

                    <!-- Footer -->

                    <table
                        role="presentation"
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                    >

                        <tr>

                            <td
                                align="center"
                                style="padding:20px;color:#999;font-size:13px;line-height:1.8;"
                            >

                                Restaurante Alfresco
                                <br>

                                Carrer d'en Pau Barrabeig, 4 · Sitges
                                <br>

                                938 94 06 00

                            </td>

                        </tr>

                    </table>

                </td>

            </tr>

        </table>
    `;
}
module.exports = generarCorreoClienteES;