import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/home';

function App() {
  return (
    <div>
      <Route path='/' exact component={Home} />
    </div>
  );
}

export default App;
