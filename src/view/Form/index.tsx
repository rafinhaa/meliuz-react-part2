import React from "react";
import  Form  from "../../components/Form";
import { useSelector } from "react-redux"; // Hook responsável por buscar informações do redux
import { IAllPersons } from "../../store/modules/types";

const FormView = () => {
    const state = useSelector((state: IAllPersons) => state.persons); // Retorna o state do redux que tem todas as pessoas
    console.log(state);
    return (
        <div className="container" >
            <Form/>
            <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((person, index) => (
                        <tr key={index}>
                            <td>{person?.name}</td>
                            <td>{person?.email}</td>
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
           
        </div>
    );
}

export default FormView;