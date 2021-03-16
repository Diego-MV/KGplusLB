import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Calculator from './pages/Calculator'
import Selector from './pages/Selector'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/KGplusLB" component={Calculator}/>
        <Route exact path="/" component={Calculator}/>
        <Route exact path="/Selector" component={Selector}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
