import { MessageBody } from "./types";
import fetch from 'node-fetch';

const sendEmail = async (data: MessageBody) => {
    const Subject = `New message from ${data.name}`;
    const From = process.env.POSTMARK_EMAIL_ADDRESS as string;
    const To = process.env.POSTMARK_EMAIL_ADDRESS as string;
    const intro = `<p>From <b>${data.name}</b>:</p>`
    const main = `<p>${data.message}</p>`;
    const timestamp = `<p>Received at ${data.date}</p>`;
    const outro = `<p>Respond at ${data.email}</p>`;

    const HtmlBody = intro + main + timestamp + outro;
    const body = JSON.stringify({
        From,
        To,
        Subject,
        HtmlBody,
        MessageStream: 'outbound'
    })

    try {
        await fetch("https://api.postmarkapp.com/email", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY as string,
            },
            body,
        });
        console.info(`Sent email notification`)
    } catch (err) {
        console.error(err);
        console.error("Error sending email notification");
    }
}

export default sendEmail