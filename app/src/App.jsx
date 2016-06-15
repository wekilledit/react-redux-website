import React from 'react';
import CounterApp from './Counter/components/CounterApp';
import CounterEvenApp from './CounterEven/components/CounterEvenApp';

const App = () => (
  <div className='app'>
    <CounterApp />
    <CounterEvenApp />
  </div>
)
App.contextTypes = {
  store: React.PropTypes.object
}

export default App
