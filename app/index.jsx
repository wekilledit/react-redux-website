/////////////////////////////////////////////////
// Matt's single page app that was written in: //
//          ______                _            //
//         | ___ \              | |            //
//         | |_/ /___  __ _  ___| |_           //
//         |    // _ \/ _` |/ __| __|          //
//         | |\ \  __/ (_| | (__| |_           //
//         \_| \_\___|\__,_|\___|\__|.         //
//                                             //
//                        You should hire him. //
/////////////////////////////////////////////////

import React            from 'react';
import ReactDOM         from 'react-dom';
import { Provider }     from 'react-redux';
import { createStore }  from 'redux';

import todoApp          from './reducers/Todo';
import App              from './components/App';

import './styles/main.css';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
