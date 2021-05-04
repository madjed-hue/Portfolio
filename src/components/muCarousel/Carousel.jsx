import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide2.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

function Slider() {
    return (
        <Home id="home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 custom-img"
                src={Slide3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        <ExpandMoreIcon className="bounce-1"/>
        </Home>
    )
}

export default Slider

const Home = styled.div`
    position: relative;
    
    .MuiSvgIcon-root{
        position:absolute;
        display:flex;
        justify-content:center;
        width: 100%;
        bottom: 20px;
        font-size: 40px;
        color: white;
        animation-name: bounce-1;
        animation-timing-function: linear;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        cursor:pointer;
    }
    @keyframes bounce-1 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
`;