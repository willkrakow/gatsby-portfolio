import {
    S3Client,
    PutObjectCommand
} from "@aws-sdk/client-s3";
import { MessageBody } from "./types";

const S3 = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
    },
});

const saveToR2 = async (data: MessageBody) => {
    const Body = JSON.stringify(data);
    const cleanedEmail = data.email.split('@').join('__at__').split('+').join('__plus__')
    const Key = `${cleanedEmail}/${new Date().toISOString()}`
    const Bucket = process.env.R2_BUCKET as string;

    try {
        await S3.send(new PutObjectCommand({
            Bucket,
            Key,
            Body,
        }));
        console.info(`Saved to R2 at ${Bucket}/${Key}`)
    } catch(err){
        console.error('Error saving to R2')
        console.error(err)
    }
}

export default saveToR2;