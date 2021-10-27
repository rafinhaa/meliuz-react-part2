import React from "react";
import  Form  from "../../components/Form";
import { useSelector } from "react-redux"; // Hook responsável por buscar informações do redux
import { IAllPersons } from "../../store/modules/types";

const FormView = () => {
    const state = useSelector((state: IAllPersons) => state.persons); // Retorna o state do redux que tem todas as pessoas
    console.log(state);
    return (
        <div>
            <Form/>
            <br />
            <hr />
            <br />
            {
                state.map((person, index) => (
                    <div key={index}>
                        <p>{person?.name}</p>
                        <p>{person?.email}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default FormView;