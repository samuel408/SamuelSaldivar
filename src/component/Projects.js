import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col,Card,Button } from 'react-bootstrap';


function Projects(){

    const titleStyle = {
        textAlign: 'center',
    };

    return (
        <div>
            <h2 style={titleStyle}>Projects</h2>
            <Container>
            <Row>
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="..." alt="Card image cap" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
               </Card>
              </Col>
              
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="..." alt="Card image cap" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
               </Card>
              </Col>
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="..." alt="Card image cap" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
               </Card>
              </Col>
            </Row>
          </Container>
        </div>
            
    );

};

export default Projects;