import FormSelector from "../components/FormSelector";
import Resultado from '../components/Resultado';
import Spinkit from '../components/Spinkit';

import {useEffect, useState} from 'react'
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 2 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Heading = styled.div`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: 10px;

  &::after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #f6931a;
    display: block;
  }
`;
const Selector = () => {
  const [kg, setKg] = useState({
    "K1.25": 0,
    "K2.5": 0,
    "K5": 0,
    "K10": 0,
    "K15": 0,
    "K20": 0,
    "K25": 0,
  });
  const [lb, setLb] = useState({
    "L5": 0,
    "L10": 0,
    "L15": 0,
    "L20": 0,
    "L25": 0,
  });
  const [ resultado, setResultado ] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateCeros = () => {
      Object.entries(kg).forEach(([key, value], index) =>
      {
        if(isNaN(parseInt(value)) && parseInt(value) !== 0){
          return false;
        }
      });
      Object.entries(lb).forEach(([key, value], index) =>
      {
        if(isNaN(parseInt(value)) && parseInt(value) !== 0){
          return false;
        }
      });
      return true;
    }

    const Calcular = () => {
      let suma = 0;
      Object.entries(kg).forEach(([key, value], index) =>
      {
        suma = parseFloat(suma) + parseInt(value)*parseFloat(key.slice(1,));
      });
      Object.entries(lb).forEach(([key, value], index) =>
      {
        suma = parseFloat(suma) + parseInt(value)*parseFloat(key.slice(1,))*0.454;
      });
      setResultado(suma);
    }

    
      if(validateCeros())
      {
        setLoading(true);
        setTimeout( () => {
        Calcular();
        setLoading(false);
      }, 500)
      }
    

  }, [resultado, kg, lb])


  return (
    <div className="container-fluid w-100 h-100">
      <Contenedor className="row">
        <div className="col-8 w-100">
        <Heading>Cantidad de Discos</Heading>
          <FormSelector sendKg={setKg} sendLb={setLb}/>
          {loading
            ? <Spinkit />
            : <Resultado resultado={resultado}/>}
        </div>
      </Contenedor>
      <div className="position-absolute bottom-0 end-0">v2.0</div>
    </div>
  );
};

export default Selector;
