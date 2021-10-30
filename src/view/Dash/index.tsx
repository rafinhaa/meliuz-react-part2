
const Dash: React.FC = () => {
    const storage: any = localStorage.getItem('@token');
    const {user} = JSON.parse(storage);

    return (
        <div className="container" > 
            <h1>Bem vindo! {user?.name}</h1>
        </div>
    );
}

export default Dash;