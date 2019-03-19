import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Form from './components/Form';
import Header from './components/Header';
import ApiCall from './components/ApiCall';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ApiCall />
        <Form/>
        <Body />
      </div>
      
    );
  }
}

export default App;
