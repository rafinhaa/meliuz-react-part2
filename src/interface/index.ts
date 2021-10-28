import React from "react";

export type ICountAction = // O type tipa a action
    | { type: 'DELETE', payload: string } // OU um objeto OU outro
    | { type: 'ADD', payload: ITodoItem };

export interface ITodoItem {
    id: string;
    title: string;
    active: boolean;
}

export interface ICountTodos {
    todos: ITodoItem[];
}

export interface IContextModel {
    state: ICountTodos;
    dispatch: React.Dispatch<ICountAction>;
}