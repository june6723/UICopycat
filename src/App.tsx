import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Container = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Content>
          <Route path="/" component={Home} />
        </Content>
      </Container>
    </Router>
  );
}

export default App;
