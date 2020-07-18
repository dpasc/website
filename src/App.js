import React from 'react';
import './App.css';
import {Container} from 'reactstrap'
import Header from './components/header/Header';
import Body from './components/body/Body'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div className="App">
        <Container>
          <Header/>
          <Body/>
          <Footer/>
        </Container>
    </div>
  );
}

export default App;
