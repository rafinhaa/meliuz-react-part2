import React, {FormEvent} from "react";

const Form = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("submit");
        alert("submit");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" placeholder="nome" />
                <input type="email" placeholder="email" />
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    );
}

export default Form;