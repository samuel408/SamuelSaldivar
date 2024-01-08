import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap';


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
                <p>Column 1</p>
              </Col>
              
              <Col>
                {/* Content for the second column */}
                <p>Column 2</p>
              </Col>
              <Col>
                {/* Content for the third column */}
                <p>Column 3</p>
              </Col>
            </Row>
          </Container>
        </div>
            
    );

};

export default Projects;