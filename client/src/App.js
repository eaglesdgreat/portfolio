import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
