import  AddTodo  from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import { Provider as TodoProvider } from "../../context/TodoContext";


const Todo = () => {
    
    return (
        <div className="container" >
            <TodoProvider>
                <AddTodo />
                <TodoList />
            </TodoProvider>
        </div>
    );
}

export default Todo;