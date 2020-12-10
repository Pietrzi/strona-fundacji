import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import News from './components/News';
import Support from './components/Support';
import Contact from './components/Contact';

class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ofundacji' component={About} />
          <Route path='/aktualnosci' component={News} />
          <Route path='/wsparcie' component={Support} />
          <Route path='/kontakt' component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
