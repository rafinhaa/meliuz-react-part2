import { FormEvent, useState, useContext, useRef} from "react";
import { Context as TodoContext } from "../../context/TodoContext"; // a palavra AS indica que o contexto é um alias para o TodoContext
import { addTodo } from "../../actions/TodoActions";


const AddTodo: React.FC = () => {
    const { dispatch } = useContext(TodoContext);
    //const [todo, setTodo] = useState<string[]>([]);

    const textInput = useRef<HTMLInputElement>(null); // a referencia do input para obter o texto digitado

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //evita o comportamento padrão do formulário que é recarregar a página quando submetido
        const temAlgoNaString = textInput.current!.value.trim(); // ! indica se o valor é nulo ou não, trim() remove os espaços em branco do começo e do fim da string
        if (temAlgoNaString === '') {
            return;
        }
        dispatch(
            addTodo(
                {
                    id: Math.round(Math.random() * Number.MAX_SAFE_INTEGER).toString(), // gera um id aleatório
                    title: temAlgoNaString,
                    active: true,
                }
            )
        );
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    ref={textInput} 
                    placeholder="Todo" />
                <input type="submit" value="Cadastrar Todo" />
            </form>
        </div>
    );
}

export default AddTodo;