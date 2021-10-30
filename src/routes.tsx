import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./private.route";

import RickAndMorty from "./view/RickAndMorty"; // importando o componente RickAndMorty
import Home from "./view/Home"; // importando o componente Home
import Form from "./view/Form"; // importando o componente Form
import Nav from "./components/Nav"; // importando o componente Nav
import Footer from "./components/Footer";
import Todo from "./view/Todo";
import SignUp from "./view/SignUp";
import SignIn from "./view/SignIn";
import Dash from "./view/Dash";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Nav />
        <Switch> {/* Renderiza apenas um componente por vez */ }
            <Route exact path="/" component={Home} /> {/* Route com exact para que apenas a rota exata seja renderizada */ }
            <Route path="/rm" component={RickAndMorty} /> {/* Route com path para que todas as rotas que comecem com /rickandmorty sejam renderizadas com o componente declarado */}
            <Route path="/form" component={Form} />
            <Route path="/todo" component={Todo} />
            <Route path="/cadastrar" component={SignUp} />
            <Route path="/logar" component={SignIn} />
            <PrivateRoute exact path="/dash" component={Dash} />
        </Switch>
        <Footer />
        </BrowserRouter>
    );
}

export default Routes;