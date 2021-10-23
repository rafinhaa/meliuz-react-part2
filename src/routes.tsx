import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import RickAndMorty from "./view/RickAndMorty"; // importando o componente RickAndMorty
import Home from "./view/Home"; // importando o componente Home

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch> {/* Renderiza apenas um componente por vez */ }
                <Route exact path="/" component={Home} /> {/* Route com exact para que apenas a rota exata seja renderizada */ }
                <Route path="/rickandmorty" component={RickAndMorty} /> {/* Route com path para que todas as rotas que comecem com /rickandmorty sejam renderizadas com o componente declarado */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;