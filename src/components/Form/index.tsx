import { FormEvent, useState } from "react";
import { IPerson } from '../../store/modules/types'
import { useDispatch } from 'react-redux' // O Dispatch é o responsável por disparar as actions
import { addNewPerson } from '../../store/modules/actions'

const Form: React.FC = () => {

    const [data, setData] = useState<IPerson>({} as IPerson);
    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //evita o comportamento padrão do formulário que é recarregar a página quando submetido
        localStorage.setItem('@person', JSON.stringify(data)); //salva o objeto no localStorage
        dispatch( 
            addNewPerson(data) // Adicionando pessoas no store do Redux
        );
    }
    
    return (
        <div className="container" >
            <form className="form" onSubmit={handleSubmit}>
                <input type="name" onChange={ e => setData({...data, name: e.target.value})} placeholder="nome" />
                <input type="email" onChange={ e => setData({...data, email: e.target.value})} placeholder="email" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
}

export default Form;