import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import FATEH from '../../assets/icons/logo1.png';
import './about.css';
import Fab from '@material-ui/core/Fab';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AttachmentIcon from '@material-ui/icons/Attachment';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../../fonts/sourceCode/SourceCodePro-Black.ttf'; 
function About() {

    return (
        <div id="about">
            <div className="about">
                <h2 className="pt-3 text-center font-details-b pb-3 about__heading">About Me</h2>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6} className="about-leftSide">
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image src={FATEH} alt="" thumbnail/>
                            </Row>
                        </Col>

                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                Hi there! I am <strong>&nbsp;Fateh Beddiaf</strong>
                                <br />A mechanical engineer and passionate programmer, born and brought up in Algeria. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and Firebase with authentication and security.
                                <br />
                                In 2017, I successfully completed my Engineering with specialization in 'Energetic Mechanics'.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer. 
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> <br />
                            </Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                                <Fab size="medium" className="contact">
                                    <a href="#contact"></a>
                                        <ContactMailIcon />
                                    <p className="contact__para">Contact</p>
                                </Fab>
                                <Fab size="medium" className="cv">
                                    <a href="https://drive.google.com/file/d/1d1yxlGu2iRwYpYEXsAkp38Z9RqQDqbda/view?usp=sharing" target="_blank"></a>
                                        <AttachmentIcon />
                                    <p className="cv__para">Resume</p>
                                </Fab>
                                <Fab size="medium" className="github">
                                    <a href="https://github.com/madjed-hue" target="_blank"></a>
                                        <GitHubIcon />
                                    
                                    <p className="git__para">Github</p>
                                </Fab>
                                <Fab size="medium" className="facebook">
                                    <a href="https://www.facebook.com/profile.php?id=100015783588265" target="_blank"></a>
                                        <FacebookIcon />
                                    
                                    <p>Facebook</p>
                                </Fab>
                                <Fab color="secondary" size="medium" className="insta">
                                    <a href="https://www.instagram.com/fateh_bdf/" target="_blank"></a>
                                        <InstagramIcon />
                                    
                                    <p>Instagram</p>
                                </Fab>
                                <Fab size="medium" className="linkdin">
                                    <a href="https://www.linkedin.com/in/beddiaf-fateh-85a060159/" target="_blank"></a>
                                        <LinkedInIcon />
                                    
                                    <p>LinkdIn</p>
                                </Fab>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About;

