import React from 'react';
import styled from '@emotion/styled';
import Landing from './pages/Landing';
import About from './pages/About';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

interface AppProps {
}
interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Container>
        <Landing />
        <About />
      </Container>
    );
  }
}
