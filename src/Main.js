import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import Row from "react-bootstrap/Row"
import Container from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class Main extends Component{
  render() {
    return (
      <>
      <main>
        <h1> {this.props.title}</h1>
        <Form>
          <Form.Group className="mb-3" controlId="Horns">
            <Form.Label>Number of Horns</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>

      <div>
    
        <Container fluid> 
          <Row sm={1} md={3} lg={5}>
            {this.props.data.map(beastInfo=>
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
