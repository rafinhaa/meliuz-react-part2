import  React, {useContext} from 'react';
import { Context as TodoContext } from "../../context/TodoContext";
import { deleteTodo } from "../../actions/TodoActions";

const TodoList: React.FC = () => {
    const {
        state:{todos}, // acessa o state e desestrutura o todos
        dispatch
    } = useContext(TodoContext);

    function deleteTodoHandler(id: string) {
        dispatch(deleteTodo(id));
    }

    return  todos.length > 0 ? (
        <>
        <table>
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    todos.map(todo => (
                        <tr>
                            <td key={todo.id}>
                                {todo.title}
                            </td>
                            <td>
                                <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
        <div className="com-todos"> 
            <h1>Eu tenho {todos.length} {todos.length > 1 ? 'tarefas' : 'tarefa'}</h1>
        </div>
        </>
    ) : (
        <div className="sem-todos" >
            <h1>Sem TODOS!</h1>
        </div>
    )
};

export default TodoList;
        