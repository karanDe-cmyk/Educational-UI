// src/Features.js
import React from "react";
import {Col, Container} from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import FeatureBox from "./FeatureBox";

const Features = () => {
  return (
    <>
      <Container>
        <div className="row">

          {FeatureBox.map((feature, index) => (
            <Col key={index} md={3}>
              <div className={feature.class}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <Nav className={feature.class1}>
                  <Nav.Link as={NavLink} to="/read more">
                    <em>{feature.em}</em>
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
          ))}
        </div>
      </Container>
      <section className="news-box top-margin">
        <div className="container">
          <span>
            
            <h2> New Courses </h2>
          </span>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="newsBox">
                <div className="thumnail">
                  <figure>
                    
                    <img src="/images/news2.jpg" alt="" />
                  </figure>
                  <div className="caption maxheight2">
                    <div className="box_inner">
                      <div className="box">
                        <p className="title">
                          <h5> Developer </h5>
                        </p>
                        <p>
                          
                          Lorem ipsum dolor sit amet, conc tetu er adipi
                          scing.Praesent ves tibuum molestie lacuiirhs.Aenean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="newsBox">
                <div className="thumnail">
                  <figure>
                    
                    <img src="/images/news3.jpg" alt="" />
                  </figure>
                  <div className="caption maxheight2">
                    <div className="box_inner">
                      <div className="box">
                        <p className="title">
                          <h5> Photography </h5>
                        </p>
                        <p>
                          
                          Lorem ipsum dolor sit amet, conc tetu er adipi
                          scing.Praesent ves tibuum molestie lacuiirhs.Aenean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="newsBox">
                <div className="thumnail">
                  <figure>
                    
                    <img src="/images/news4.jpg" alt="" />
                  </figure>
                  <div className="caption maxheight2">
                    <div className="box_inner">
                      <div className="box">
                        <p className="title">
                          <h5> Audio Editing </h5>
                        </p>
                        <p>
                          
                          Lorem ipsum dolor sit amet, conc tetu er adipi
                          scing.Praesent ves tibuum molestie lacuiirhs.Aenean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="title-box clearfix">
              <h2 className="title-box_primary"> About Us </h2>
            </div>
            <p>
              
              <span>
                
                Perspiciatis unde omnis iste natus error sit voluptatem.Cum
                sociis natoque penatibus et magnis dis parturient montes ascetur
                ridiculus musull dui.
              </span>
            </p>
            <p>
              
              Lorem ipsumulum aenean noummy endrerit mauris.Cum sociis natoque
              penatibus et magnis dis parturient montes ascetur ridiculus
              mus.Null dui.Fusce feugiat malesuada odio.
            </p>
            <p>
              
              Lorem ipsumulum aenean noummy endrerit mauris.Cum sociis natoque
              penatibus et magnis dis parturient montes ascetur ridiculus
              mus.Null dui.Fusce feugiat malesuada odio.
            </p>
            <Nav.Link
              as={NavLink}
              to="/read more"
              title="read more"
              className="btn-inline"
              target="_self"
            >
              
              read more
            </Nav.Link>
          </div>
          <div className="col-md-4">
            <div className="title-box clearfix">
              <h2 className="title-box_primary"> Up Coming Courses </h2>
            </div>
            <div className="list styled custom-list">
              <ul>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    Mathematics and Computer Science
                  </Nav.Link>
                </li>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    Mathematics and Philosophy
                  </Nav.Link>
                </li>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    Philosophy and Modern Languages
                  </Nav.Link>
                </li>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    History(Ancient and Modern)
                  </Nav.Link>
                </li>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    Classical Archaeology and Ancient History
                  </Nav.Link>
                </li>
                <li>
                  
                  <Nav.Link
                    as={NavLink}
                    to="/"
                    title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                  >
                    
                    Physics and Philosophy
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
