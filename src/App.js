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
import Cookie from './components/Cookie';
import VolInfo from './components/VolInfo';
import Kids from './components/Kids';
import Teen from './components/Teen';
import Seniors from './components/Seniors';

class App extends React.Component {

  state = {
    sideMenu: false,
    policy: false,
    cookie: false
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

  cookieOnClickHandler = () => {
    this.setState({
      cookie: true
    })
  }

  cookieOffClickHandler = () => {
    this.setState({
      cookie: false
    })
  }

  render() {

    let policy;
    if (this.state.policy) {
      policy = <Policyy click={this.policyOffClickHandler}/>
    }

    let cookie;
    if (this.state.cookie) {
      cookie = <Cookie klik={this.cookieOffClickHandler}/>
    }

    return (
      <>
        {policy}
        {cookie}
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
            <Route path='/info' component={VolInfo} />
            <Route path='/dzieci' component={Kids} />
            <Route path='/mlodziez' component={Teen} />
            <Route path='/seniorzy' component={Seniors} />
          </Switch>
          <Footer click={this.policyOnClickHandler} klik={this.cookieOnClickHandler}/>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default App;
