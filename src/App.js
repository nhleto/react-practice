import logo from './logo.svg';
import './App.css';
import {Header, header} from './components/Header';
import {Home, home} from './components/Home';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}


export default App;