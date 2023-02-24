import { MessageBody } from "./types";
type ParseBodyResult = {
    data: MessageBody | null,
    errors: string[],
}
export const parseBody = (body: string): ParseBodyResult => {
    const errors: string[] = [];
    try {
        const data = JSON.parse(body) as Omit<MessageBody, 'date'>;
        ['name', 'email', 'subject', 'message'].forEach(key => {
            if (!data[key]) {
                errors.push(`"${key}" is required`)
            }
        });
        return {
            data: {...data, date: new Date().toDateString()},
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