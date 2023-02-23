import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => { 
    if (event.body){
        try {
            console.log(JSON.parse(event.body))
            return Promise.resolve({
                statusCode: 200,
                body: event.body,
            })
        } catch(err){
            console.log(err)
            return Promise.resolve({
                statusCode: 500,
                body: JSON.stringify({error: "Failed to parse"})
            })
        }
    }

    return Promise.resolve({
        statusCode: 200,
        body: JSON.stringify({receivedMessage: false})
    })
};

export { handler };
