import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            todo<span>App</span>
          </h1>
          <h2>A simple todolist app built with React, Redux & MongoDB</h2>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
