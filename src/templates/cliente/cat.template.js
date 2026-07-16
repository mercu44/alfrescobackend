function generarCorreoClienteCAT({nombre,fecha,hora,personas}){
    return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
        <tr>
            <td align="center">

                <!-- Capçalera -->

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#6CB87B;">
                    <tr>
                        <td align="center" style="padding:40px 20px;">
                            <h1 style="margin:0;font-size:36px;font-weight:300;color:#ffffff;">
                                Restaurant Alfresco
                            </h1>
                        </td>
                    </tr>
                </table>

                <!-- Contingut -->

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
                                Hem rebut la teva sol·licitud
                            </h2>

                            <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 20px;">
                                Hola <strong>${nombre}</strong>,
                            </p>

                            <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 30px;">
                                Gràcies per confiar en el <strong>Restaurant Alfresco</strong>.
                                Hem rebut correctament la teva sol·licitud de reserva amb les dades següents:
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
                                        <strong>Data</strong>
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
                                        <strong>Persones</strong>
                                    </td>

                                    <td>
                                        ${personas}
                                    </td>
                                </tr>

                            </table>

                            <b style="margin:35px 0 20px;font-size:17px;color:#555;line-height:1.8;"> El nostre equip confirmarà ben aviat la disponibilitat. </b> 
                            <p style="margin:0;font-size:17px;color:#555;line-height:1.3;"> Si l’hora que prefereixes no està disponible, t’enviarem altres opcions. Tingues en compte que comencem els sopars a partir de les 19 h, de manera que respondrem les sol·licituds rebudes després de les 18.30 l’endemà al matí. </p> 
                            <p style="margin:0;font-size:17px;color:#555;line-height:1.3;"> Si necessites modificar qualsevol dada o tens alguna consulta, pots respondre directament a aquest correu o enviar un WhatsApp al <strong>+34 723838527</strong>. </p>

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
                                            Moltes gràcies.
                                        </p>

                                        <p style="margin:8px 0 0;font-size:16px;color:#444;">
                                            Equip del Restaurant Alfresco
                                        </p>

                                    </td>

                                </tr>

                            </table>

                        </td>

                    </tr>

                </table>

                <!-- Peu de pàgina -->

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

                            Restaurant Alfresco
                            <br>

                            Carrer d'en Pau Barrabeig, 4 · Sitges
                            <br>

                            +34 938 94 06 00

                        </td>

                    </tr>

                </table>

            </td>

        </tr>

    </table>
`;
}

module.exports = generarCorreoClienteCAT;
