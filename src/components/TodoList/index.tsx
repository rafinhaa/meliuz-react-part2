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
        <div>
            <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            {todo.title}
                            <button onClick={() => deleteTodoHandler(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
            <h5>Eu tenho {todos.length} {todos.length > 1 ? 'tarefas' : 'tarefa'}</h5>
        </div>
    ) : (
        <div>
            <h5>Sem TODOS!</h5>
        </div>
    )
};

export default TodoList;
        