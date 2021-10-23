import axios from 'axios'; // Axios é um client HTTP para consumir APIs

const api = axios.create({ // estamos criando uma instância de axios
    baseURL: 'https://rickandmortyapi.com/api/character', // baseURL é a url base para todas as requisições
});

export default api; // exportamos a instância de axios