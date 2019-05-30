import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from '@emotion/styled';
import { Header } from './components/Header';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Work } from './pages/Work';
import './App.css';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export default class App extends React.Component<{}, {}> {
  render() {
    return <Router>
      <Container>
        <Header/>
        <Route exact path="/" component={ Landing }/>
        <Route path="/home" component={ Landing }/>
        <Route path="/about" component={ About }/>
        <Route path="/work" component={ Work }/>
      </Container>
    </Router>;
  }
}
