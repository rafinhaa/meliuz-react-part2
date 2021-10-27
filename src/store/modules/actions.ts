import { IPerson } from "./types";

interface IAction {
    type: string;
    payload: {
        person: IPerson;
    };
}

export function addNewPerson<IAction>(person: IPerson) {
    return {
        type: 'ADD_PERSON',
        payload: {
            person
        }
    }
}