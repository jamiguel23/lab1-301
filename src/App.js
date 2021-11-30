import React, { Component } from 'react';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
