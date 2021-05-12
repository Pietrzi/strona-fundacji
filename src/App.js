import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Volunteer from './components/Volunteer';
import Support from './components/Support';
import Contact from './components/Contact';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Policyy from './components/Policyy';

class App extends React.Component {

  state = {
    sideMenu: false,
    policy: false
  };

  sideMenuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu }
    })
  }

  policyOnClickHandler = () => {
    this.setState({
      policy: true
    })
  }

  policyOffClickHandler = () => {
    this.setState({
      policy: false
    })
  }

  render() {

    let policy;
    if (this.state.policy) {
      policy = <Policyy click={this.policyOffClickHandler}/>
    }


    return (
      <>
        {policy}
        <BrowserRouter>
          <div className="body-wrapper">
          <Navbar menuHandler={this.sideMenuClickHandler} />
          <SideMenu show={this.state.sideMenu} click={this.sideMenuClickHandler}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/ofundacji' component={About} />
            <Route path='/wolontariat' component={Volunteer} />
            <Route path='/wsparcie' component={Support} />
            <Route path='/kontakt' component={Contact} />
          </Switch>
          <Footer click={this.policyOnClickHandler}/>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
