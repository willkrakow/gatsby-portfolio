import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import saveToR2 from "./hello/saveToR2";
import sendEmail from "./hello/sendEmail";
import sendTexts from "./hello/sendTexts";
import { parseBody } from "./hello/utils";


const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => { 
    if (event.body){
        try {
            const {data, errors} = parseBody(event.body);
            if (errors.length > 0 || data === null){
                return {
                    statusCode: 500,
                    body: JSON.stringify({errors, message: "Request body invalid."})
                }
            }
            
            await sendTexts(data);
            await sendEmail(data);
            await saveToR2(data);

            return Promise.resolve({
                statusCode: 200,
                body: JSON.stringify({errors: null, message: "Your message has been received."}),
            })
        } catch(err){
            console.log(err)
            return Promise.resolve({
                statusCode: 500,
                body: JSON.stringify({errors: ["Error submitting message"], message: "Error submitting message"})
            })
        }
    }

    return Promise.resolve({
        statusCode: 200,
        body: JSON.stringify({errors: ["No message body"]})
    })
};

export { handler };
