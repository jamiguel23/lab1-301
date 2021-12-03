import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';



const numberOfHorns = [1, 2, 3, 100];

class Main extends Component{

  constructor(props){
    super(props);
    this.state ={
      horns : numberOfHorns
    }
  }

  handleChange = (event) => {
    const selection = event.target.value;
    console.log(selection);
    let selectedHornArr;

    if (selection === '1'){
      selectedHornArr = numberOfHorns.filter(horn => (horn === 1))
    } else if (selection === '2'){
      selectedHornArr = numberOfHorns.filter(horn => (horn ===2))
    }else if (selection === '3'){
      selectedHornArr = numberOfHorns.filter(horn => (horn ===3)) 
    }else if (selection === '100'){
      selectedHornArr = numberOfHorns.filter(horn => (horn ===100))
    }else if (selection === 'all'){
      selectedHornArr = numberOfHorns
    }

    this.setState({horns: selectedHornArr})
  }

  render() {
    return (
      <>
      <main>
        <h1> {this.props.title}</h1>
        <Form>
          <p> Use the drop down menu to select the amount of horns on the beasts you want to view
            
          </p>
          <Form.Select onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form>

      <div>
    
        <Container fluid>
            <Row sm={1} md={3} lg={5}>
              {this.props.data.filter( beast => this.state.horns.includes(beast.horns))             
              .map(beastInfo=>
              <HornedBeasts
                title={beastInfo.title}
                image_url={beastInfo.image_url}
                description={beastInfo.description}
                keyword={beastInfo.keyword}
                horns={beastInfo.horns}
                chosenBeast={this.props.chosenBeast}
              />)}
            </Row>
        </Container>

      </div>
      </main>
      </>
     )
  }
}

export default Main
