import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import logo from './../static/logo2.svg'

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: 'red' }
  } else {
    return { color: 'yellow' }
  }
}

const NavBar = withRouter(({ history }) => (
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="45"></img>
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/">
                  <button class="nav-link link-scroll" style={isActive(history, '/')}>
                    Home <span class="sr-only">(current)</span>
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/expertise">
                  <button class="nav-link link-scroll" style={isActive(history, '/expertise')}>
                    Expertise
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/experience">
                  <button class="nav-link link-scroll" style={isActive(history, '/experience')}>
                    Experience
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/education">
                  <button class="nav-link link-scroll" style={isActive(history, '/education')}>
                    Education
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about">
                  <button class="nav-link link-scroll" style={isActive(history, '/about')}>
                    About
                  </button>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact">
                  <button class="nav-link link-scroll" style={isActive(history, '/contact')}>
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
))

export default NavBar
