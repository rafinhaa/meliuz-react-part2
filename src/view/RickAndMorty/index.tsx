import { AxiosResponse } from "axios";
import React, {useState, useEffect} from "react";
import api from "../../service/api";

interface IResults { // a interface é um contrato e serve para definir o tipo de dados que a variável pode receber
  id: number; // usamos ponto e vírgula para separar os atributos
  image: string;
  name: string;
  url: string;
}

interface ICount {
  count: number;
  page: number;
}

interface IResponseData {
  info: ICount;
  results: IResults[];
}

const RickAndMorty = () => { // RickAndMorty: React.FC = () => {
  const [data, setData] = useState<IResults[]>([]); // Literals "< >" é um tipo de dados que não pode ser alterado
  const [pages, setPage] = useState(1); // Tipo implicito é iniciado com um valor 0 e não pode ser alterado
  const [info, setInfo] = useState<ICount>({} as ICount); // Usamos a sigla AS para forçar o tipo a ser ICount
  const [isLoad,setIsLoad] = useState(false);

  // o useEffect é uma função que é executada sempre que o componente é renderizado
  useEffect(() => {
    setIsLoad(true);
    api.get<IResponseData>(`?page=${pages}`).then((response) => { // quando usamos o then ele assume o async e o await
        console.log(response.data);
        setInfo(response.data?.info);
        setData(response.data?.results);
      }
    ).catch( e => console.log(e)) // O catch é para caso ocorra algum erro, ele é mostrado no console
    .finally( // Essa será a ultima instrução a ser chamada
      () => setIsLoad(false)
    ); 
  },[pages]); // Toda vez que for clicado no botões de paginação ele vai atualizar a página, por que foi atribuido um novo valor a pages
  return (
    <>
      <h1>RickAndMorty</h1>
      {
        data.map(item => ( // map é um método que percorre todos os itens do array e renderiza cada um deles
          <div key={item.id}>
            <img src={item.image} alt={item.name}/>
            <p>{item.name}</p>
            <a href={item.url}>CLique aqui para ver mais</a>
          </div>
        ))
      }
      <button onClick={() => setPage(pages - 1)} disabled={pages <= 1} >Página anterior</button>
      <button onClick={() => setPage(pages + 1)} disabled={ pages >= info.page} >Próxima página</button>
      
    </>
  ); // return é o retorno da função
}

export default RickAndMorty;