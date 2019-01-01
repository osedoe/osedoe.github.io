import React from 'react';
// import css from 'emotion';
import Landing from './pages/Landing';
import About from './pages/About';


const style = 'black';

interface AppProps {
}
interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Landing />
        <About />
      </div>
    );
  }
}
