import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

export default function Course() {

  return (
    <div>
      <Header />
      <header id="head" className="secondary">
        <div className="container">
          <Typewriter options={{strings: ["Course"], autoStart: true, loop: true,}} />
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!
          </p>
        </div>
      </header>


      <div className="container">
        <h3> Courses </h3>{" "}
        <p style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>{" "}
        <br />
        <ul class="list-unstyled video-list-thumbs row">
          <li class="col-sm-4 col-lg-3 col-xs-6">
            <a
              href="/"
              title="Claudio Bravo, antes su debut con el Barça en la Liga"
            >
              <img
                src="./images/mqdefault.jpg"
                alt="Barca"
                className="img-responsive"
                height={130}
              />{" "}
              <h2> Claudio Bravo, antes su debut con el Barça en la Liga </h2>{" "}
              <span class="play-button"> </span>{" "}
              <span class="duration"> 03: 15 </span>{" "}
            </a>{" "}
          </li>{" "}
          <li class="col-lg-3 col-sm-4 col-xs-6">
            <a
              href="/"
              title="Claudio Bravo, antes su debut con el Barça en la Liga"
            >
              <img
                src="./images/mqdefault.jpg"
                alt="Barca"
                className="img-responsive"
                height={130}
              />{" "}
              <h2> Claudio Bravo, antes su debut con el Barça en la Liga </h2>{" "}
              <span class="play-button"> </span>{" "}
              <span class="duration"> 03: 15 </span>{" "}
            </a>{" "}
          </li>{" "}
          <li class="col-lg-3 col-sm-4 col-xs-6">
            <a
              href="/"
              title="Claudio Bravo, antes su debut con el Barça en la Liga"
            >
              <img
                src="./images/mqdefault.jpg"
                alt="Barca"
                className="img-responsive"
                height={130}
              />{" "}
              <h2> Claudio Bravo, antes su debut con el Barça en la Liga </h2>{" "}
              <span class="play-button"> </span>{" "}
              <span class="duration"> 03: 15 </span>{" "}
            </a>{" "}
          </li>{" "}
          <li class="col-lg-3 col-md-4 col-sm-4 col-xs-6">
            <a
              href="/"
              title="Claudio Bravo, antes su debut con el Barça en la Liga"
            >
              <img
                src="./images/mqdefault.jpg"
                alt="Barca"
                className="img-responsive"
                height={130}
              />{" "}
              <h2> Claudio Bravo, antes su debut con el Barça en la Liga </h2>{" "}
              <span class="play-button"> </span>{" "}
              <span class="duration"> 03: 15 </span>{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
      <div id="courses">
        <section className="container">
          <h3> Development Courses </h3>{" "}
          <div className="row">
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> Responsive Design </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> HTML5 / CSS3 </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> Web Designing </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> Web App Dev </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> Responsive Design </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="featured-box">
                <div className="text">
                  <h3> Data Base </h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
      <Container>
        <Row>
          <section class="col-sm-12 maincontent">
            <h3> Responsive Website </h3>{" "}
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry 's standard dummy text
              ever since the 1500 s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.It has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.It was popularised in
              the 1960 s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.{" "}
            </p>{" "}
          </section>{" "}
          <h3> Bootstrap </h3>{" "}
          <p>
            {" "}
            Standard dummy text ever since the 1500 s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen
            book.It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.It was
            popularised in the 1960 s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </p>{" "}
        </Row>{" "}
      </Container>{" "}
      <Footer />
    </div>
  );
}
