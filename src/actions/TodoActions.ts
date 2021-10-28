import { ITodoItem, ICountAction} from "../interface"

export const addTodo = (todo: ITodoItem): ICountAction => ({
    type: 'ADD',
    payload: todo
})

export const deleteTodo = (id: string): ICountAction => ({
    type: 'DELETE',
    payload: id
})