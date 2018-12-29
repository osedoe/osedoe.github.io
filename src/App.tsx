import React from 'react';
import Landing from './pages/Landing';
import css from 'emotion';

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
      </div>
    );
  }
}
