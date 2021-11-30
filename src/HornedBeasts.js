import React, {Component} from 'react'

export default class HornedBeasts extends Component{
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageURL} alt ='A picure of a horned beast'></img>
        <p> {this.props.description}</p>

      </div>
    )
  }
}
