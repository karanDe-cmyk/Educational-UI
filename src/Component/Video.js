import React from "react";
import Header from "./Header";
import { Col, Container, Row, Nav } from "react-bootstrap";
import {NavLink, Outlet} from 'react-router-dom';
import Footer from "./Footer";
import Typewriter from 'typewriter-effect';

export default function Video() {
  return (
    <div>
      <Header />
      <header id="head" className="secondary">
        <div className="container">
          <Typewriter options={{strings: ["Online Video"], autoStart: true, loop: true,}} />
          <p style={{ color: "white", fontWeight: "200"}}>
             
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele! 
          </p> 
        </div> 
      </header> 
      <Container>
        <Row>
          <Col md={12}>
            <section
              id="portfolio"
              className="page-section section appear clearfix"
            >
              <br />
              <br />
              <p style={{ color: "gray" }}>
                 
                At lorem Ipsum available, but the majority have suffered
                alteration in some form by injected huffered altehe majority
                have suffered alteration in some form by injected huffered
                alteration in some form by injected humour.uffered alteration in
                some form by injected h <br /> <br />
              </p> 
              <Row>
                <nav id="filter" class="col-md-12 text-center">
                  <ul>
                    <li>
                      <Nav.Link as={NavLink} to="/video/all" className="current btn-theme btn-small">  
                        All 
                      </Nav.Link> 
                    </li> 
                    <li>
                      <Nav.Link as={NavLink} to="/video/development" className="btn-theme btn-small">  
                        Development 
                      </Nav.Link> 
                    </li> 
                    <li>
                      <Nav.Link as={NavLink} to="/video/designing" className="btn-theme btn-small"> 
                        Designing 
                      </Nav.Link> 
                    </li> 
                    <li>
                      <Nav.Link as={NavLink} to="/video/tool" className="btn-theme btn-small">   
                        Tools 
                      </Nav.Link> 
                    </li> 
                  </ul> 
                </nav> 
                <Outlet />
                 
              </Row> 
            </section> 
          </Col> 
        </Row> 
      </Container> 
      <Footer />
    </div>
  );
}
