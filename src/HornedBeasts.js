import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

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

  handleClick = () => {
    this.props.chosenBeast(this.props.title, this.props.image_url, this.props.description);

  }

  render() {
    return (
      <Card border = "dark">

      <div>
        <h2>{this.props.title}</h2>
        
        <Image onClick={this.handleClick}src={this.props.image_url} alt ='A picture of a horned beast' roundedCircle fluid></Image>
        <p>{'💛' + this.state.numberOfClicks}</p>
        <Button onClick={this.addFavortite}>Click Here</Button>
        <p> Description: {this.props.description}</p>
        <p>{this.props.keyword}</p>
        <p> Number of Horns: {this.props.horns}</p>

      </div>

      </Card>
    )
  }
}


