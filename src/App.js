import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Regist from "./pages/Regist";
import BMIcalculator from "./pages/BMIcalculator";
import Uppercase from "./pages/Touppercase";
import Todo from './pages/Todo'

//components
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/regist">
            <Regist />
          </Route>

          <Route path="/bmi-calculator">
            <BMIcalculator />
          </Route>

          <Route path='/to-upper-case'>
            <Uppercase />
          </Route>

          <Route path='/to-do'>
            <Todo />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
