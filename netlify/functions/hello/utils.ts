import { MessageBody } from "./types";

export const parseBody = (body: string) => {
    const errors: string[] = [];
    try {
        const data = JSON.parse(body) as MessageBody;
        ['name', 'email', 'subject', 'message'].forEach(key => {
            if (!data[key]) {
                errors.push(`"${key}" is required`)
            }
        });
        return {
            data,
            errors,
        }

    } catch (err) {
        console.error(err)
        return {
            errors: ["Something went wrong. Please try again."],
            data: null,
        }
    }
}