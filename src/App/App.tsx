import React from 'react';
import './App.css';
import RouteApp from '../route'
import { Provider } from "react-redux";
import store from './store';

function App() {
    return (
    <div data-testid="App" className="App">
        <Provider store={store}>
        <RouteApp/>
        </Provider>
    </div>
  );
}

export default App;
