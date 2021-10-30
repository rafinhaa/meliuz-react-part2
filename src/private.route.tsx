import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

interface IToken {
    exp: number;
    iat: number;
}

const PrivateRoute: any = ({ component: Component, path: Path, ...rest }: any) => {
    const isLogged: string | null = localStorage.getItem('@token');

    const isSessionActive = (): boolean => {
        if (isLogged === null) {
            return false;
        }
        const storageData = JSON.parse(isLogged);
        const {token} = storageData;
        const tokenPayload = jwtDecode<IToken>(token); // const tokenPayload : IToken= jwtDecode(token);
        const timeNow = Date.now() / 1000;
        return  timeNow > tokenPayload.exp ? false : true; 
    };

    return (
        <Route {...rest} render={(props: any) => (
            isSessionActive() ? <Component {...props} /> : <Redirect to="/login" />
        )}
        />
    );
}

export default PrivateRoute;