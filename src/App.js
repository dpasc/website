import React from 'react';
import './App.css';
import {Container} from 'reactstrap'
import Header from './components/header/Header';
import Body from './components/body/Body'


function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Body/>
      </Container>
    </div>
  );
}

export default App;
