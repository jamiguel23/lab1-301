import React, { Component } from 'react';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <Main data={data} />
        <Footer />
       
      </div>
    )
  }
}
