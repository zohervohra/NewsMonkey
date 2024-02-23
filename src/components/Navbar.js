import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom';
import brandLogo from './android-chrome-512x512.png'


export default class Navbar extends Component {

  render(props) {
    let { title } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top  ">
          <div className="container-fluid">
          <a class="navbar-brand" href="/">
      <img src={brandLogo} alt="" width="40" height="32" style={{borderRadius:  '25%'}}/>
    </a>
            <a className="navbar-brand" to="/">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>

      


              </ul>
              <SearchBar />
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
