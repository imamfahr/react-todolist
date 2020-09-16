import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react'

//pages
import Home from './pages/Home';
import Regist from './pages/Regist';

//components
import Navbar from './components/Navbar.jsx'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path = "/regist">
        <Regist/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
