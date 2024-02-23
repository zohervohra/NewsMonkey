
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Spinner from './components/Spinner';


export default class extends Component {
  render() {

    return (
    
        <Router>
          <Navbar title="News Monkey" />
          <Routes>
          <Route path="/business" element={ <News key='business'pagesize={8} category='business' />} />
          <Route path="/general" element={ <News key='general'pagesize={8} category='general' />} />
          <Route path="/technology" element={ <News key='technology'pagesize={8} category='technology' />} />
          <Route path="/health" element={ <News key='health'pagesize={8} category='health' />} />
          <Route path="/sports" element={ <News key='sports'pagesize={8} category='sports' />} />
          <Route path="/science" element={ <News key='science'pagesize={8} category='science' />} />
          <Route path="/entertainment" element={ <News key='entertainment'pagesize={8} category='entertainment' />} />
          <Route path="/about" element={<Spinner/>} />
          <Route path="/" element={ <News key='home'pagesize={8} />} />

            {/* <News pagesize={6} category='business' /> */}
          </Routes>
        </Router>
     
    )
  }
}
