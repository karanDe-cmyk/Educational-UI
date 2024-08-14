import React from "react";
import Header from "./Header";
import { Container, Col, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Typewriter from "typewriter-effect";
import {ValidationSchemaExample} from './ValidationSchemaExample';

export default function Contact() {

  return (
    <div>
      <Header />
      <header id="head" class="secondary">
        <div class="container">
          <Typewriter
            options={{ strings: ["Contact"], autoStart: true, loop: true }}
          />
          <p style={{ color: "white" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!{" "}
          </p>{" "}
        </div>{" "}
      </header>
      <Container mt={10}>
        <Row>
          <Col md={8}>
            <h3 class="section-title"> Your Message </h3>{" "}
            <p>
              {" "}
              Lorem Ipsum is inting and typesetting in simply dummy text of the
              printing and typesetting industry.Lorem Ipsum has been the is
              dummy text ever since the 1500 s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
            </p>
          <ValidationSchemaExample />
          </Col>{" "}
          <Col md={4}>
            <Row>
              <Col md={6}>
                <h3 className="section-title"> Office Address </h3>{" "}
                <div className="contact-info">
                  <h5> Address </h5>{" "}
                  <p> 5 th Street, Carl View - United States </p>
                  <h5> Email </h5> <p> info @webthemez.com </p>
                  <h5> Phone </h5> <p> +09 123 1234 123 </p>{" "}
                </div>{" "}
              </Col>{" "}
            </Row>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
      <Footer />
    </div>
  );
}
