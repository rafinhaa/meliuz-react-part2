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

//Tipagem para o formulário da API de autenticação
export interface ISignUp {
    password: string;
    name: string;
    email: string;
}

export type ISignIn = Omit<ISignUp, "name">;