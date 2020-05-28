import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Chat } from './components'

function App() {
  return (
    <div className="App">
      <h1>Kafana</h1>
      <Link to="/">Home</Link>
      <Link to="/chat">Chat</Link>
      <Switch>
        <Route path="/chat" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
