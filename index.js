import React, { Component } from 'react';
import { render } from 'react-dom';
import {UserForm} from './components/UserForm'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
