import React from 'react';
import Routes from './routes'; // Importação de rotas
import { Provider } from 'react-redux'; // o provider é responsável por conectar o redux ao react
import store  from './store'; // o store é responsável por armazenar os dados da aplicação

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => { // FC = Function Component
  return (
    <Provider store={store}> {/* o provider é responsável por conectar o redux ao react*/}
      <Routes />
      <ToastContainer/>
    </Provider>
  );
}

export default App;