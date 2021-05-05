import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/logo1.png";
import Tilt from "react-tilt";
import "./experiences.css";
// import tilt from "react-tilt";

const Experience = () => {
    return (
    <div id="experience">
        <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
        <Jumbotron className="jumbo-style">
        <Container>
            <Tilt options={{ max: 25 }}>
            <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                    <Card.Title className="text-center">Mechanical Engineer </Card.Title>
                </div>
                <div>
                    <Card.Text className="text-center style">
                    <strong className="body-title-style ">Maintenance Engineer and Designer</strong>
                    <br />
                    <strong>Technology:</strong> SOLIDWORKS
                    <br />
                    <strong>Duration:</strong> January 2018 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                        <li><strong>Maintenance &amp; problem solver</strong> for industrial fiber machines</li>
                        <li><strong>Design</strong> Mechanical spare part for import or fabrication purpose using SolidWorks.
                        </li>
                        {/* <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                        </li>
                        <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li> */}

                    </ul>
                    
                    
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
            </Tilt>
        </Container>
        </Jumbotron>

        <Jumbotron className="jumbo-style">
        <Container>
            <Tilt options={{ max: 25 }}>
            <Card>
                {/* <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" />
                </Card.Header> */}
                <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                    <Card.Title className="text-center">Developer</Card.Title>
                </div>
                <div>
                    <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, EJS, VB.NET, MS-SQL, Node JS, Firebase
                    <br />
                    <strong>Duration:</strong> May 2019 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                        <li><strong>Front-end</strong> developed multiple web pages as Front-End developer.</li>
                        <li><strong>Back-end</strong> well knowledge how to deal with sql and nosql databases, tables relationships authentication and security, servers
                        </li>
                        <li><strong>SEO</strong> Medium knowledge about Search Engine Optimizations. 
                        </li>
                        {/*<li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                        to the business requirements.</li> */}
                    </ul>
                    
                    
                    </Card.Text>
                </div>
                </Card.Body>
            </Card>
            </Tilt>
        </Container>
        </Jumbotron>
    </div>
    );
};

export default Experience;