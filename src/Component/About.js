import React from "react";
import "./Style.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Typewriter from 'typewriter-effect';

export default function About() {
  return (
    <div>
      <Header />
      <header id="head" className="secondary">
        <Container>
            <Typewriter options={{strings: ["About"], autoStart: true, loop: true,}} />
          <p style={{ color: "white", fontWeight: "200" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!{" "}
          </p>{" "}
        </Container>{" "}
      </header>
      <Container>
        <Row>
          <Col sm={8} className="maincontent">
            <h3> About Us </h3>{" "}
            <p>
              {" "}
              <img
                src="./images/about.jpg"
                alt="about"
                className="img-rounded pull-right"
                width={300}
              />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam
              beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.{" "}
            </p>{" "}
            <p>
              Consectetur adipisicing elit.Eveniet, consequuntur eius
              repellendus eos aliquid molestiae ea laborum ex quibusdam
              laudantium voluptates placeat consectetur quam aliquam beatae
              soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.{" "}
            </p>{" "}
            <h3> Our Achievements </h3> <strong> 2014 </strong>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam
              beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.consequuntur eius repellendus eos aliquid
              molestiae ea laborum ex quibusdam laudantium voluptates placeat
              consectetur quam aliquam!
            </p>{" "}
            <strong> 2013 </strong>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam
              beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.consequuntur eius repellendus eos aliquid
              molestiae ea laborum ex quibusdam laudantium voluptates placeat
              consectetur quam aliquam!
            </p>{" "}
            <strong> 2012 </strong>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam
              beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.consequuntur eius repellendus eos aliquid
              molestiae ea laborum ex quibusdam laudantium voluptates placeat
              consectetur quam aliquam!
            </p>{" "}
            <strong> 2011 </strong>{" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet,
              consequuntur eius repellendus eos aliquid molestiae ea laborum ex
              quibusdam laudantium voluptates placeat consectetur quam aliquam
              beatae soluta accusantium iusto nihil nesciunt unde veniam magnam
              repudiandae sapiente.consequuntur eius repellendus eos aliquid
              molestiae ea laborum ex quibusdam laudantium voluptates placeat
              consectetur quam aliquam!
            </p>{" "}
          </Col>{" "}
          <aside className="col-sm-4 sidebar sidebar-right">
            <div className="panel">
              <h4> Latest News </h4>{" "}
              <ul className="list-unstyled list-spaces">
                <li>
                  <a href="/"> Responsive Design </a>
                  <br />
                  <span className="small text-muted">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    Animi, laborum.{" "}
                  </span>{" "}
                </li>{" "}
                <li>
                  <a href="/"> HTML5, CSS3 and JavaScript </a>
                  <br />
                  <span className="small text-muted">
                    {" "}
                    Consequuntur eius repellendus eos aliquid molestiae
                    ealaborum ex quibusdam{" "}
                  </span>{" "}
                </li>{" "}
                <li>
                  <a href="/"> Bootstrap </a>
                  <br />
                  <span className="small text-muted">
                    {" "}
                    Eveniet, consequuntur eius repellendus eos aliquid
                    molestiaeea{" "}
                  </span>{" "}
                </li>{" "}
                <li>
                  <a href="/"> Clean Template </a>
                  <br />
                  <span className="small text-muted">
                    {" "}
                    Sed, mollitia earum debitis est itaque esse reiciendis
                    ametcupiditate.{" "}
                  </span>{" "}
                </li>{" "}
                <li>
                  <a href="/"> Premium Quality </a>
                  <br />
                  <span className="small text-muted">
                    {" "}
                    Voluptate minus illo tenetur sint ab in culpa cumque
                    impeditquibusdam.Saepe, molestias quia.{" "}
                  </span>{" "}
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </aside>{" "}
        </Row>{" "}
      </Container>
      <section class="team-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3> Our Team </h3>{" "}
              <p>
                Voluptate minus illo tenetur sint ab in culpa cumque impedit
                quibusdam.Saepe, molestias quia.Voluptate minus illo tenetur
                sint ab in culpa cumque impedit quibusdam.Saepe, molestias
                quia.Voluptate minus illo tenetur sint ab in culpa cumque
                impedit quibusdam.Saepe, molestias quia.{" "}
              </p>{" "}
              <br />
            </div>{" "}
          </div>{" "}
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="team-member">
                <div class="member-img">
                  <img
                    src="./images/photo-1.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>{" "}
                <h4> John Doe </h4> <span class="pos"> CEO </span>{" "}
                <div class="team-socials">
                  <a href="/">
                    {" "}
                    <i class="fa fa-facebook"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-google-plus"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-twitter"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-dribbble"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-github"> </i>
                  </a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="team-member pDark">
                <div class="member-img">
                  <img
                    src="./images/photo-2.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>{" "}
                <h4> Larry Doe </h4> <span class="pos"> Director </span>{" "}
                <div class="team-socials">
                  <a href="/">
                    {" "}
                    <i class="fa fa-facebook"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-google-plus"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-twitter"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-dribbble"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-github"> </i>
                  </a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="team-member pDark">
                <div class="member-img">
                  <img
                    src="./images/photo-3.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>{" "}
                <h4> Ranith Kays </h4> <span class="pos"> Manager </span>{" "}
                <div class="team-socials">
                  <a href="/">
                    {" "}
                    <i class="fa fa-facebook"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-google-plus"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-twitter"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-dribbble"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-github"> </i>
                  </a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-md-3 col-sm-6 col-xs-6">
              <div class="team-member pDark">
                <div class="member-img">
                  <img
                    src="./images/photo-4.jpg"
                    className="img-responsive"
                    alt=""
                  />
                </div>{" "}
                <h4> Joan Ray </h4> <span class="pos"> Creative </span>{" "}
                <div class="team-socials">
                  <a href="/">
                    {" "}
                    <i class="fa fa-facebook"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-google-plus"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-twitter"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-dribbble"> </i>
                  </a>
                  <a href="/">
                    {" "}
                    <i class="fa fa-github"> </i>
                  </a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <Footer />
    </div>
  );
}
