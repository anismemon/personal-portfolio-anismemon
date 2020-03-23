import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// ---------------- imports all the other components

import About from './About';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Interests from './Interests';
import Work from './Work'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal.js';
import Home from './Home'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalDisplayed: false,
      language: 'EN',
      home: "Home",
      about: "About Me",
      portfolio: 'Portfolio',
      work: "Work History",
      interests: 'Interests',
    }
  }

  // opens modal

  modalOpen = () => {
    this.setState({
      modalDisplayed: !this.state.modalDisplayed
    })
  }

  // three functions to switch among languages (I tried to make a single changeLanguage function, but my if-conditions did not work)

  changetoFrench = () => {
    this.setState({
      language: 'FR',
      home: "Accueil",
      about: 'À propos de moi',
      work: 'Travail',
      interests: 'Mes intérêts'
    })
  }

  changetoItalian = () => {
    this.setState({
      language: 'IT',
      home: 'Homepage',
      about: "A proposito di me",
      work: 'Esperienza lavorativa',
      interests: 'I miei interessi'

    })
  }

  changetoEnglish = () => {
    this.setState({
      language: 'EN',
      home: "Home",
      about: "About Me",
      work: "Work History",
      interests: 'Interests',
    })
  }

  render() {
    return (
      <div className="App">
        <div id='pushFooter'>

          <div id='headerLine'>Anis Memon</div>

          <div id='langButtons'><Header changetoFrench={this.changetoFrench} changetoItalian={this.changetoItalian} changetoEnglish={this.changetoEnglish} language={this.state.language} /></div>

          <div id='body'>
            <div id='contentContainer'>
              <div id='blankSpace'>
                <div>

                </div>
              </div>
              <div id='pages'>
                <Switch >
                  <Route exact path={'/'} render={(props) => <Home {...props} language={this.state.language} />} />
                  <Route path={'/about'} render={(props) => <About {...props} language={this.state.language} />} />
                  <Route path={'/portfolio'} component={Portfolio} />
                  <Route path={'/work'} render={(props) => <Work {...props} language={this.state.language} />} />
                  <Route path={'/interests'} render={(props) => <Interests {...props} language={this.state.language} />} />
                </Switch>
              </div>

              <div id='navbar'>
                <Navbar home={this.state.home} about={this.state.about} portfolio={this.state.portfolio} work={this.state.work} interests={this.state.interests} />
              </div>
            </div>
          </div>          
          <div className='push'></div>         
        </div>
        <Modal modalDisplayed={this.state.modalDisplayed} modalOpen={this.modalOpen} />
        <div id='footer'>
          <Footer language={this.state.language} modalOpen={this.modalOpen} />
        </div>

      </div>
    );
  }

}

export default App;
