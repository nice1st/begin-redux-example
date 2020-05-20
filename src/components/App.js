import React, { Component } from 'react';
import AppTemplate from './AppTemplate';
import Todos from './Todos';
import CounterContainer from 'containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <AppTemplate
        counter={<CounterContainer />}
        todos={<Todos />}
      />
    );
  }
}

export default App;
