import React from 'react';
import './scss/style.scss';

import Home from './components/Home';
import Navbar from './components/Navbar';

class App extends React.Component {


  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    )
  }
}

export default App;
