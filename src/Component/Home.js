import Header from "./Header";
import "./Style.css";
import Features from "./Features.js";
import Footer from "./Footer.js";
import "react-slideshow-image/dist/styles.css";
import Carousel from 'react-bootstrap/Carousel';
import GoToBtn from "./GoToBtn.js";

export default function Home() {
  return (
    <>
      <Header />
        <Carousel className="mainconatiner1">
            <Carousel.Item interval={1000}>
                <img src="images/slides/thumbs/img1.jpg" alt="" width={1700} height={600} />
                <Carousel.Caption>
                    <h1>Start Online Education</h1>
                    <p>Free Online education template for elearning and online education institute.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src="images/slides/thumbs/img2.jpg" alt="" width={1700} height={600}/>
                <Carousel.Caption>
                    <h1>Start Online Education</h1>
                    <p>Free Online education template for elearning and online education institute.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="images/slides/thumbs/img3.jpg" alt="" width={1700} height={600} />
                <Carousel.Caption>
                    <h1>Start Online Education</h1>
                    <p>Free Online education template for elearning and online education institute.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Features />
        <GoToBtn />
        <Footer />
    </>
  );
}
