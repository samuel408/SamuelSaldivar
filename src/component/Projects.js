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
                    <Card.Body>
                      <Card.Title>Personal Website</Card.Title>
                      <Card.Text>
                        This website was built using React and Bootstrap on the front end and Node.js and Express.js on the backend 
                        I used express to create a server that will allow me to route to different pages and also to send emails from 
                        the contact page using nodeMailer's API.
                      </Card.Text>
                      <Button variant="primary">Code</Button>
                    </Card.Body>
               </Card>
              </Col>
              
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Tech Daily</Card.Title>
                      <Card.Text>
                      Tech Daily is an interactive platform mirroring Reddit’s functionality. Users create secure profiles, share posts, 
                      engage in discussions, and contribute via upvoting. The SQL infrastructure manages user data, posts, comments, 
                      and interactions.
                      </Card.Text>
                      <Button variant="primary">Code</Button>
                      <Button variant="primary">Website</Button>

                    </Card.Body>
               </Card>
              </Col>
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> Weather Report </Card.Title>
                      <Card.Text>
                      Developed a Weather app utilizing weather APIs to retrieve real-time conditions and a 5-day forecast for any 
                      city. Implemented a UV index feature, displaying green for good, orange for moderate, and red for severe ratings. Incorporated a
                      search history.
                      </Card.Text>
                      <Button variant="primary">Github</Button>
                      <Button variant="primary">Website</Button>

                    </Card.Body>
               </Card>
              </Col>
              <Col>
                {/* Content for the first column */}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>  Covid tracker </Card.Title>
                      <Card.Text>
                      Developed and collaborated with partner to create a COVID-19 Tracker app using Chart API and a News API. The app features a 
                      user-friendly interface displaying the latest news, an interactive chart, and a country-specific COVID-19 summary. 
                      </Card.Text>
                      <Button variant="primary">Github</Button>
                      <Button variant="primary">Website</Button>

                    </Card.Body>
               </Card>
              </Col>
            </Row>
            
          </Container>
        </div>
            
    );

};

export default Projects;