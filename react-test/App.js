import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Routes from './components/routes';

library.add(faSearch)
library.add(faPlus)

class App extends Component {
  render() {
    return (
      <div className="app">
        <Routes />
      </div>
    );
  }
}

export default App;
