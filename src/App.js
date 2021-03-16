import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';

import Calculator from './pages/Calculator'
import Selector from './pages/Selector'

const Label = styled.label`
  font-family: "Bebas Neue", cursivel;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`;

function App() {
  const [side, setside] = useState(false);
  const switchSide = () => {
    setside(!side);
    console.log(side)
  }

  return (
    <div>
      {side ? <Selector/> : <Calculator/>}
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={switchSide}/>
        {side ? <Label class="form-check-label" for="flexSwitchCheckDefault">Cambiar a calculadora</Label> : <Label class="form-check-label" for="flexSwitchCheckDefault">Cambiar a Selector</Label>}
      </div>
    </div>
  );
}

export default App;
