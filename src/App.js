import React, { Component } from 'react';
import Main from './Main.js';
import Footer from './Footer.js';
import Header from './Header.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

export default class App extends Component {
  

  constructor(props){
    super(props);
    this.state ={
      showModal:false,
      title: 'test',
      image_url: 'test',
      description: 'test'

    }
  }

  openModal = () => {
    this.setState({showModal: true})
  }
  closeModal = () => {
    this.setState({showModal: false})
  } 

  chosenBeast = (title, image_url, description) => {
    this.setState({ 
      showModal :true,
      title: title, 
      image_url: image_url, 
      description:description
    })
  }


  render() {
    return (
      <div>
        <Header />
        
        <Main
          data={data} 
          chosenBeast={this.chosenBeast}
        />
        <SelectedBeast 
          title={this.state.title}
          image_url={this.state.image_url}
          description = {this.state.description}
          showModal={this.state.showModal}
          closeModal={this.closeModal}
        />
        <Footer />
       
      </div>
    )
  }
}
