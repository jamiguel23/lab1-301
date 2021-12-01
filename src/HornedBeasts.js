import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'

export default class HornedBeasts extends Component{


  constructor (props){
    super(props);
    
    this.state = {
      numberOfClicks:0
    }
  }

  addFavortite = ()=> {
    this.setState({
      numberOfClicks : this.state.numberOfClicks + 1});
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageURL} alt ='A picure of a horned beast'></img>
        <p>{'💛' + this.state.numberOfClicks}</p>
        <Button onClick={this.addFavortite}>Click Here</Button>
        <p> {this.props.description}</p>
        <p>{this.props.keyword}</p>
        <p>{this.props.horns}</p>

      </div>
    )
  }
}

{/* <Button variant="outline-secondary">Secondary</Button>{' '} */}
