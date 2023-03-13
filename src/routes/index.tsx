import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

import GlobalStyles from '../global/styles';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;