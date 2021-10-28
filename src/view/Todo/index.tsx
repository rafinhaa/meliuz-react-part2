import  AddTodo  from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import { Provider as TodoProvider } from "../../context/TodoContext";


const Todo = () => {
    
    return (
        <div>
            <TodoProvider>
                <AddTodo />
                <hr />
                <TodoList />
            </TodoProvider>
        </div>
    );
}

export default Todo;