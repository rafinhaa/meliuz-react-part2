import { render } from 'react-dom'; // O render é um método que renderiza o componente no DOM
import App from './App'; // é o onde está o componente App, importando o App do arquivo App.tsx
import './style/globals.scss'; // importando o arquivo global.scss

render(
    <App />, // O App é o componente que será renderizado
    document.getElementById('root') // O root é o elemento no DOM que será renderizado que está no arquivo index.html
);