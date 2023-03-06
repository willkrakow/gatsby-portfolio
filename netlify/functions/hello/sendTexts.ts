import { MessageBody } from "./types";
import Twilio from 'twilio';

const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN,);

const sendTexts = async (data: MessageBody) => {
    const subject = `From ${data.name} (${data.email}):\n\n Re "${data.subject}"`;
    const message = data.message;
    try {
        await twilioClient.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER as string,
            to: process.env.MY_PHONE_NUMBER as string,
            body: subject,
        })

        await twilioClient.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER as string,
            to: process.env.MY_PHONE_NUMBER as string,
            body: message,
        });
        console.info("Sent text notifications");
    } catch(err){
        console.error("Error sending texts");
        console.error(err)
    }
    
}

export default sendTexts;