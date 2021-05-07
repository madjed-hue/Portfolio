import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
            <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                <div className="m-2">
                    <a href="mailto:madjedbdf@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-danger" title="madjedbdf@gmail.com">
                        <i className="fas fa-envelope-square"></i> Email Me
                    </Button>
                    </a>
                </div>
                <div className="m-2">
                    <a href="https://www.linkedin.com/in/beddiaf-fateh-85a060159/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Visit my LinkenIn">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </Button>
                    </a>
                </div>
                
                <div className="m-2">
                    <a href="https://github.com/madjed-hue" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-dark" title="My other projects">
                        <i className="fab fa-github-square"></i> GitHub
                    </Button>
                    </a>
                </div>
                <div className="m-2">
                    <a href="https://www.instagram.com/fateh_bdf/" target="_blank" rel="noopener noreferrer">
                    <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                    <i class="fab fa-instagram"></i> Instagram
                    </Button>
                    </a>
                </div>
                {/* <div className="m-2">
                    <a href="https://twitter.com/akjha96" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-info" title="Tweets are welcomed!">
                        <i className="fab fa-twitter"></i> Twitter
                    </Button>
                    </a>
                </div> */}
                <div className="m-2">
                    <a href="https://www.facebook.com/profile.php?id=100015783588265" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline-primary" title="Say hello on FB">
                        <i className="fab fa-facebook-square"></i> FaceBook
                    </Button>
                    </a>
                </div>
                </Col>
            </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;