import React, { FormEvent } from "react";
import registerAPI from "../../service/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignUp } from "../../interface";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const SignUp: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignUp>();
    const history = useHistory(); // para redirecionar para outra pagina
    const onSubmit: SubmitHandler<ISignUp> =  (data) =>{
        console.log(data);
        registerAPI.post('users',data).then(
            (response) => {
                toast.success('Cadastro efetuado com sucesso', { onClose: ()=> history.push('/login') }) 
            }
        ).catch(
            (e) => toast.error(`Erro: ${e.data.message}`)
        )
    }

    return (
        <div className="container">
            <h1>Formulário de cadastro</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <input type="text" placeholder="nome" {...register('name',{required: true})} />
                <input type="text" placeholder="email" {...register('email',{required: true})} />
                <input type="password" placeholder="password" {...register('password',{required: true})} />
                <input type="submit" value="Enviar" />
            </form>
            <span>
                {errors.name && 'Nome é obrigatório'}
                {errors.email && 'Email é obrigatório'}
                {errors.password && 'Senha é obrigatória'}
            </span>
        </div>
    );
}

export default SignUp;