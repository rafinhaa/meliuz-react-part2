import React from 'react';
import Routes from './routes'; // Importação de rotas
import { Provider } from 'react-redux'; // o provider é responsável por conectar o redux ao react
import store  from './store'; // o store é responsável por armazenar os dados da aplicação

const App: React.FC = () => { // FC = Function Component
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;