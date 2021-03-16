import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #12526b;
  font-family: "Bebas Neue", cursive;
  text-align: center;
  max-height: 40px;
`;
const Precio = styled.p`
  font-size: 30px;
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
            El peso total es: <span>{String(resultado).slice(0,6)} KG</span>
          </Precio>
        </ResultadoDiv>
        
      </div>
      
    </div>
  );
};

export default Resultado;
