import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/todolist.png";
import L_HULUCLONE from "../../assets/img/projects/hulu.png";
import L_AMAZONE from "../../assets/img/projects/amazon.png";
import L_AIRBNB from "../../assets/img/projects/airbnb.png";
import L_Disney from "../../assets/img/projects/desney.png";
import L_TINDA from "../../assets/img/projects/tinda.png";
import L_RESTURANT from "../../assets/img/projects/resturant.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_EJS from "../../assets/img/skills/ejs.png";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";
// import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";


import "./timeline.css";

const TimeLine = () => {
    return (
        <div id="projects">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <Timeline>
            <Events>
            {/* Project: Todo List With MUI */}
            <ImageEvent
                date="02/05/2021"
                className="text-center"
                text="HULU Clone"
                src={L_HULUCLONE}
                alt="Hulu Clone"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> This app is built with React and Material UI, FlexBox and TMBD, Firebase.
                            TMDB it's an API calls movies service
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>React flip move for animations</li>
                            <li>Real-time API calls</li>
                            <li>Styled with  Material-UI</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_FIREBASE}
                                    alt="Firebase"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Firebase
                                </span>
                            </li>
                            
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://tender-clone-3e078.web.app/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    
                </div>
                </div>
            </ImageEvent>

            <ImageEvent
                date="26/04/2021"
                className="text-center"
                text="Disney+ Clone"
                src={L_Disney}
                alt="disney plus clone"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> Disney+ Clone works as well as the original application.
                            with google loging authentication, and tracking user actions.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Google login/logout authentication</li>
                            <li>Smouth Routing between pages</li>
                            <li>Usage of Redux store</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                React-Router
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REDUX}
                                    alt="Redux"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Redux
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://disneyplus-clone-77bb2.web.app/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/madjed-hue/Disney-Clone"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>


            {/* Project: Get GitHub Info */}
            <ImageEvent
                date="10/04/2021"
                className="text-center"
                text="Amazon Clone"
                src={L_AMAZONE}
                alt="Amazone Clone"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> An app that similar to Amazon website, 
                            with google login/logout authentication and a card to store your number of purchased items 
                            and dynamic calculation of necessity budget
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Add as many as you want of items</li>
                            <li>fire Store database</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Material-UI
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_FIREBASE}
                                    alt="Firebase"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Firebase
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                React-Router
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://clone-7360d.web.app/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/madjed-hue/Amazon-clone"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                    
                </div>
                </div>
            </ImageEvent>
            <ImageEvent
                date="21/03/2021"
                className="text-center"
                text="Airbnb Clone"
                src={L_AIRBNB}
                alt="Airbnb Clone"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> An app similar to airbnb
                            fully responsive.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Responsive design</li>
                            <li>smouth routing without refreshing the page</li>
                            {/* <li>Keep tracks of entries for each user</li> */}
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT}
                                    alt="React"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                React
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_REACT_ROUTER}
                                    alt="React Router"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                React-Router
                                </span>
                            </li>
                            
                            </ul>
                            <hr />
                            
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://airbnb-clone-23da7.web.app/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/madjed-hue/airbnb-clone"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                    
                </div>
                </div>
            </ImageEvent>
            
            
            <ImageEvent
                date="10/07/2020"
                className="text-center"
                text="ToDo App"
                src={L_ReactToDoList}
                alt="ToDo list App"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> This is a Todo App based on EJS, EXpress and deployed with Heruku, it keeps a track of your Todos
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Keeps track of your Todos</li>
                            <li>Powered by Node.js and Express</li>
                            <li>Respoisive Design</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_EJS}
                                    alt="EJS"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                EJS
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_EXPRESS}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Express
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_NODE_JS}
                                    alt="Node js"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                Node.js
                                </span>
                            </li>
                            
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="https://murmuring-scrubland-72870.herokuapp.com/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                    <UrlButton
                    href="https://github.com/akjha96/Todo-List-React"
                    target="_blank"
                    >
                    SOURCE CODE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            {/* Project: RoboFriends */}

            

            {/* Project: Product_Hunt_Clone */}

            <ImageEvent
                date="15/12/2019"
                className="text-center"
                text="Tinda Clone"
                src={L_TINDA}
                alt="Tinda Clone"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> this is just aclone of Tinda Website.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>fully responsive</li>
                            {/* <li>Signin as existing user</li>
                            <li>Raise a Product for people to see and Vote</li>
                            <li>Delete a product</li>
                            <li>Like and Dislike a product</li>
                            <li>Fully funtional Administration panel</li> */}
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_BOOTSTRAP4}
                                    alt="Bootstrap 4"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Bootstrap 4
                                </span>
                            </li>
                            
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_JAVASCRIPT}
                                    alt="JavaScript"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                JavaScript
                                </span>
                            </li>
                            </ul>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton
                    href="http://vixreactor.epizy.com/tinda/"
                    target="_blank"
                    >
                    SEE LIVE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>

            {/* Project: Portfolio using Django */}
            <ImageEvent
                date="07/10/2019"
                className="text-center"
                text="Resturant Landing Page"
                src={L_RESTURANT}
                alt="Resturant Landing Page"
            >
                <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                    <Accordion>
                    <Card>
                        <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                        >
                        PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                            <strong>Description:</strong> This app is a landing page for resturant (own custom template).
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                            <li>Navigation Bullets</li>
                            <li>change color with local storage</li>
                            <li>
                                Hosted using infinityfree under www.infinityfree.net
                            </li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                HTML5
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                CSS3
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_BOOTSTRAP4}
                                    alt="Bootstrap 4"
                                    rounded
                                    className="image-style m-1"
                                ></Image>{" "}
                                Bootstrap 4
                                </span>
                            </li>
                            <li>
                                <span className="p-2">
                                <Image
                                    src={L_JAVASCRIPT}
                                    alt="JavaScript"
                                    rounded
                                    className="image-style1 m-1"
                                ></Image>{" "}
                                JavaScript
                                </span>
                            </li>
                            </ul>
                            
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                    <UrlButton href="http://vixreactor.epizy.com/fast-food/" target="_blank">
                    SEE LIVE
                    </UrlButton>
                </div>
                </div>
            </ImageEvent>
            </Events>
        </Timeline>
        </div>
    );
};

export default TimeLine;
