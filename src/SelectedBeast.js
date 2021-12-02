import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import  Image  from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';

export default class SelectedBeast extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.closeModal} >
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.description}
          </Modal.Body>
          <Image src={this.props.image_url} alt={this.props.title} onclick={this.handleClick} className="img-fluid"/>
        </Modal>

      </div>
    )
  }
}

{/* <Button variant = "danger" onClick={this.props.handleCloseModal}>Close</Button> */}
