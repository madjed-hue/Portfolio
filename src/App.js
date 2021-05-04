import './App.css';
import Slider from './components/muCarousel/Carousel';
import NavBar from './components/myNavbar/Navbar';
import TitleMessage from './components/title-message/titleMessage';
import About from './pages/about/aboutMe';
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import BackgroundImg from "./assets/img/background/background.webp"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slider/>
      <TitleMessage/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BackgroundImg}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
