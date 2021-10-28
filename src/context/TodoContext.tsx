import React, {useReducer, createContext} from "react"; 
import { ICountTodos, ICountAction, IContextModel} from "../interface";

//Manipular o objeto de contexto de maneira global, o contextAPI ele trata a api de contexto
//Para compatilhar informações entre componentes

const defaultState: ICountTodos = {
    todos: [],
};

const reducer = ( state: ICountTodos, action: ICountAction ) => { //action é o que vai ser manipulado
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
}

export const Context = createContext({} as IContextModel);

export const Provider : React.FC = ({children}) => { // children é o que está dentro do Provider no App.tsx
    const [state, dispatch] = useReducer(reducer, defaultState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
}