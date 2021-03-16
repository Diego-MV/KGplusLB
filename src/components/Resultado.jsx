import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #12526b;
  font-family: "Bebas Neue", cursive;
  text-align: center;
`;
const Precio = styled.p`
  font-size: 23px;
  margin-bottom: 4px;
  span {
    color: #f6931a;
  }
`;

const Resultado = ({ resultado }) => {
    return (
    <div className="card mb-2">
      <div className="card-body ">
        <ResultadoDiv>
          <Precio>
            El peso en discos es: <span>{resultado} KG</span>
          </Precio>
          <Precio>
            El peso con barra es: <span>{parseFloat(resultado)+20} KG</span>
          </Precio>
        </ResultadoDiv>
        
      </div>
      
    </div>
  );
};

export default Resultado;
