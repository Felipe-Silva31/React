import "./App.css"
import React, {Component} from 'react';


import Navbar from './components/Header'
import Card from './components/Card';
import Favoritos from './components/Favoritos'
import Repositorios from "./components/Repositorios";

class App extends Component {

  render(){
    return (
      <div className="App">
          <Navbar />
          <Card />
          <Favoritos />
          <Repositorios />
      </div>
    );
  }
}

export default App;
