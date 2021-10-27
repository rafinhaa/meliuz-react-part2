import { FormEvent, useState } from "react";

const AddTodo: React.FC = () => {
    const [todo, setTodo] = useState<string[]>([]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //evita o comportamento padrão do formulário que é recarregar a página quando submetido
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={ e => setTodo([...todo,e.target.value]) }placeholder="Todo" />
                <input type="submit" value="Cadastrar Todo" />
            </form>
        </div>
    );
}

export default AddTodo;