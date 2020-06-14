import { CHANGE_NAME } from "./types";

export const changeName = (firstName: string, lastName: string): any => ({
    type: CHANGE_NAME,
    payload: {
        lastName,
        firstName
    }
});