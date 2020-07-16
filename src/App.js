import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}></Route>

        <Route path="/Home" exact component={Home}></Route>
        <Route path="/Cart" exact component={Cart}></Route>

      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
