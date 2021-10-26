import {Reducer} from 'redux';
import { IAllPersons } from './types';

const INITIAL_STATE: IAllPersons = { // O estado inicial é do tipo IAllPersons
    persons: []
}

const AllPersons: Reducer<IAllPersons | any > = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_PERSON':
            {
                //persons: [...state.persons, action.payload]
                console.log(action.payload)
                const {persons} = action.payload;
                return {...state, persons: [...state.persons, persons]}
            }
        default:
            return state;
    }
}

export default AllPersons;