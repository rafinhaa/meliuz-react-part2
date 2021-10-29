import { AxiosResponse } from "axios";
import React, {useState, useEffect} from "react";
import api from "../../service/api";
import Lottie from "lottie-react"; // Lottie é um componente que permite renderizar animações
import animationMorty from "../../assets/animation/morty-dance-loader.json"; // importamos o arquivo json para o Lottie

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

  // esse options é um objeto que é passado para o Lottie
  const options = { // Lottie é um componente que permite renderizar animações
    loop: true, // loop: true permite que a animação seja executada infinitamente
    autoplay: true, // autoplay: true permite que a animação seja executada automaticamente
    animationData: animationMorty, // animationData: animationMorty permite que a animação seja executada
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice" // preserveAspectRatio: "xMidYMid slice" permite que a animação seja executada
    }
  };

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
      () => {
        setTimeout(() => {
          setIsLoad(false);
        },1000);
      }
    ); 
  },[pages]); // Toda vez que for clicado no botões de paginação ele vai atualizar a página, por que foi atribuido um novo valor a pages
  
  if(isLoad){
    return (
      <div>
        <Lottie
          animationData={animationMorty}
          width={200}
          height={200}
        />
      </div>
    )
  }

  return (
    <div className="container">
      <h1>RickAndMorty</h1>
      <div className="content" >
        {
          data.map(item => ( // map é um método que percorre todos os itens do array e renderiza cada um deles
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name}/>
              <p>{item.name}</p>
              <a href={item.url}>CLique aqui para ver mais</a>
            </div>
          ))
        }
      </div>
      <div className="button-paggination" >
        <button onClick={() => setPage(pages - 1)} disabled={pages <= 1} >Página anterior</button>
        <button onClick={() => setPage(pages + 1)} disabled={ pages >= info.page} >Próxima página</button>
      </div>
    </div>
  ); // return é o retorno da função
}

export default RickAndMorty;