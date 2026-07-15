function generarCorreoClienteEN({nombre,fecha,hora,personas}){
    return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;">
        <tr>
            <td align="center">

                <!-- Header -->

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#6CB87B;">
                    <tr>
                        <td align="center" style="padding:40px 20px;">
                            <h1 style="margin:0;font-size:36px;font-weight:300;color:#ffffff;">
                                Alfresco Restaurant
                            </h1>
                        </td>
                    </tr>
                </table>

                <!-- Container -->

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
                                We have received your request
                            </h2>

                            <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 20px;">
                                Hello <strong>${nombre}</strong>,
                            </p>

                            <p style="font-size:17px;color:#555;line-height:1.8;margin:0 0 30px;">
                                Thank you for choosing <strong>Alfresco Restaurant</strong>.
                                We have successfully received your reservation request with the following details:
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
                                        <strong>Date</strong>
                                    </td>

                                    <td>
                                        ${fecha}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Time</strong>
                                    </td>

                                    <td>
                                        ${hora}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Guests</strong>
                                    </td>

                                    <td>
                                        ${personas}
                                    </td>
                                </tr>

                            </table>

                        
                            <b style="margin:35px 0 20px;font-size:17px;color:#555;line-height:1.8;">
                                Our team will confirm availability shortly.
                            </b>

                            <p>
                                If your preferred time is not available, we will send you alternative options. Please note that dinner service starts at 7:00 pm, so requests received after 6:30 pm will be answered the following morning.
                            </p>

                            <p style="margin:0;font-size:17px;color:#555;line-height:1.8;">
                                If you need to modify any details or have any questions, you can reply directly to this email or send a WhatsApp message to <strong>+34 723838527</strong>.
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
                                            Thank you very much.
                                        </p>

                                        <p style="margin:8px 0 0;font-size:16px;color:#444;">
                                            The Alfresco Restaurant Team
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

                            Alfresco Restaurant
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

module.exports = generarCorreoClienteEN;
