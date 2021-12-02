import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';

export default class SelectedBeast extends Component {
  render() {
    console.log('img link:', this.props.image_url)
    return (
      <div>
        <Modal 
        show={this.props.showModal} 
        onHide={this.props.closeModal}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
          </Modal.Body>
          <img src={this.props.image_url} alt={this.props.title} onClick={this.handleClick} className="img-fluid"/>
        </Modal>

      </div>
    )
  }
}


