import React, {useState} from "react";

interface IClient { // a interface é um contrato e serve para definir o tipo de dados que a variável pode receber

}

const RickAndMorty = () => { // RickAndMorty: React.FC = () => {
  const [data, setData] = useState<IClient>(""); // Literals < > é um tipo de dados que não pode ser alterado
  return (
    <div>RickAndMorty</div>
  ); // return é o retorno da função
}

export default RickAndMorty;