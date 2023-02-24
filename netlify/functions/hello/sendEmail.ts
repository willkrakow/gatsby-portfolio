import Sendgrid from '@sendgrid/mail';
Sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

import { MessageBody } from "./types";

const sendEmail = async (data: MessageBody) => {
    const text = `${data.message}\n\nReply at ${data.email}`
    const email = process.env.SENDGRID_EMAIL_ADDRESS as string;
    const to = process.env.MY_EMAIL_ADDRESS as string;

    try {
        await Sendgrid.send({
            from: { email },
            to,
            text,
            subject: data.subject,
        });
        console.info(`Sent email notification`)
    } catch(err){
        console.error("Error sending email notification");
    }
}

export default sendEmail