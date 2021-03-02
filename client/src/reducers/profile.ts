import { CHANGE_NAME, ProfileActions } from "../actions/types";
import { InitialStateProfile } from "./types";

const initialState: InitialStateProfile = {
    firstName: "John",
    lastName: "Smith"
};

export const profileReducer = (state = initialState, action: ProfileActions): InitialStateProfile => {
    switch(action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            };
        default:
            return state;
    }
}