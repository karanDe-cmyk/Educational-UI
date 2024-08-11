import React from "react";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Typewriter from 'typewriter-effect';

export default function Price() {
  return (
    <div>
      <Header />
      <header id="head" class="secondary">
        <div class="container">
            <Typewriter options={{strings: ["Our Price"], autoStart: true, loop: true,}} />
          <p style={{color: "white", fontWeight: "200"}}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!{" "}
          </p>{" "}
        </div>{" "}
      </header>
      <Container>
        <Row>
          <section class="col-sm-12 maincontent">
            <h3> Cost </h3>{" "}
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
        </Row>{" "}
      </Container>
      <Container>
        <div className="heading">
          <h3> Range </h3>{" "}
          <p>
            {" "}
            At lorem Ipsum available, but the majority have suffered alteration
            in some form by injected humour.{" "}
          </p>
          <br />
        </div>
        <Row className="flat">
          <div class="col-lg-3 col-md-3 col-xs-6">
            <ul class="plan plan1">
              <li class="plan-name"> Basic </li>{" "}
              <li class="plan-price">
                {" "}
                <strong> $29 </strong> Fee
              </li>
              <li>
                {" "}
                <strong> 08 </strong> Responsive
              </li>
              <li>
                {" "}
                <strong> 12 </strong> HTML5/CSS{" "}
              </li>{" "}
              <li>
                {" "}
                <strong> 15 </strong> Flex
              </li>
              <li>
                {" "}
                <strong> 10 </strong> Mobile App
              </li>
              <li>
                {" "}
                <strong> Live </strong> Demo
              </li>
              <li class="plan-action">
                <a href="/" class="btn">
                  {" "}
                  Signup{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6">
            <ul class="plan plan2 featured">
              <li class="plan-name"> Standard </li>{" "}
              <li class="plan-price">
                {" "}
                <strong> $59 </strong> Fee
              </li>
              <li>
                {" "}
                <strong> 08 </strong> Responsive
              </li>
              <li>
                {" "}
                <strong> 12 </strong> HTML5/CSS{" "}
              </li>{" "}
              <li>
                {" "}
                <strong> 15 </strong> Flex
              </li>
              <li>
                {" "}
                <strong> 10 </strong> Mobile App
              </li>
              <li>
                {" "}
                <strong> Live </strong> Demo
              </li>
              <li class="plan-action">
                <a href="/" class="btn">
                  {" "}
                  Signup{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6">
            <ul class="plan plan3">
              <li class="plan-name"> Advanced </li>{" "}
              <li class="plan-price">
                {" "}
                <strong> $79 </strong> Fee
              </li>
              <li>
                {" "}
                <strong> 08 </strong> Responsive
              </li>
              <li>
                {" "}
                <strong> 12 </strong> HTML5/CSS{" "}
              </li>{" "}
              <li>
                {" "}
                <strong> 15 </strong> Flex
              </li>
              <li>
                {" "}
                <strong> 10 </strong> Mobile App
              </li>
              <li>
                {" "}
                <strong> Live </strong> Demo
              </li>
              <li class="plan-action">
                <a href="/" class="btn">
                  {" "}
                  Signup{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          <div class="col-lg-3 col-md-3 col-xs-6">
            <ul class="plan plan4">
              <li class="plan-name"> Mighty </li>{" "}
              <li class="plan-price">
                {" "}
                <strong> $109 </strong> Fee
              </li>
              <li>
                {" "}
                <strong> 08 </strong> Responsive
              </li>
              <li>
                {" "}
                <strong> 12 </strong> HTML5/CSS{" "}
              </li>{" "}
              <li>
                {" "}
                <strong> 15 </strong> Flex
              </li>
              <li>
                {" "}
                <strong> 10 </strong> Mobile App
              </li>
              <li>
                {" "}
                <strong> Live </strong> Demo
              </li>
              <li class="plan-action">
                <a href="/" class="btn">
                  {" "}
                  Signup{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </Row>{" "}
      </Container>{" "}
      <Footer />
    </div>
  );
}
