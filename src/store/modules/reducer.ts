import {Reducer} from 'redux';
import { IAllPersons } from './types';

const INITIAL_STATE: IAllPersons = { // O estado inicial é do tipo IAllPersons
    persons: []
}

const AllPersons: Reducer<IAllPersons | any > = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_PERSON':
            {
                console.log('action',action.payload)
                const {person} = action.payload;
                return {...state, persons: [...state.persons, person] }
            }
        default: {
            return state;
        }
    }
}

export default AllPersons;