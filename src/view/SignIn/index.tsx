import React, { FormEvent } from "react";
import registerAPI from "../../service/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { ISignIn } from "../../interface";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const SignIn: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignIn>();
    const history = useHistory(); // para redirecionar para outra pagina
    const onSubmit: SubmitHandler<ISignIn> =  (data) =>{
        console.log(data);
        registerAPI.post('session',data).then(
            (response) => {
                localStorage.setItem('@token', JSON.stringify(response.data));
                toast.success('Login com sucesso', { onClose: ()=> history.push('/dash') }) 
            }
        ).catch(
            (e) => toast.error(`Erro: ${e.data.message}`)
        )
    }

    return (
        <div className="container">
            <h1>Formulário de Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form" >
                <input type="text" placeholder="email" {...register('email',{required: true})} />
                <input type="password" placeholder="password" {...register('password',{required: true})} />
                <input type="submit" value="Enviar" />
            </form>
            <span>
                {errors.email && 'Email é obrigatório'}
                {errors.password && 'Senha é obrigatória'}
            </span>
        </div>
    );
}

export default SignIn;