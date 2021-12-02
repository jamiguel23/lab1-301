import { Component } from 'react';
// import data from './data.json';
import HornedBeasts from './HornedBeasts.js';
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';


class Main extends Component{
  render() {
    return (
      <>
      <main>
        <h1> {this.props.title}</h1>

      <div>
    
        <Container fluid> 
          <Row sm={1} md={3} lg={5}>
            {this.props.data.map(beastInfo=>
            <HornedBeasts
              title={beastInfo.title}
              imageURL={beastInfo.image_url}
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
