import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
