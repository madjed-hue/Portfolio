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
import Skills from './pages/skill/skillsSection';
import Experience from './pages/experience/Experience';
import TimeLine from './components/timeline/timeline';
import ContactForm from './pages/contact/contact';
import FooterPanel from './components/footer/Footer';

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
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />

    </div>
  );
}

export default App;
