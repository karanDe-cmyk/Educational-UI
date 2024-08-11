import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <Container>
          <Row className="footerbottom">
            <Col md={3} sm={6}>
              <div className="footerwidget">
                <h4> Course Categories </h4>{" "}
                <div className="menu-course">
                  <ul className="menu">
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        List of Technology{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        List of Business{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        List of Photography{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        List of Language{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </Col>{" "}
            <Col md={3} sm={6}>
              <div className="footerwidget">
                <h4> Products Categories </h4>{" "}
                <div className="menu-course">
                  <ul className="menu">
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        Individual Plans{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        Business Plans{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        Free Trial{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        Academic{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </Col>{" "}
            <Col md={3} sm={6}>
              <div className="footerwidget">
                <h4> Browse by Categories </h4>{" "}
                <div className="menu-course">
                  <ul className="menu">
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        All Courses{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        All Instructors{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        All Members{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      <Nav.Link as={NavLink} to="/">
                        {" "}
                        All Groups{" "}
                      </Nav.Link>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </Col>{" "}
            <Col md={3} sm={6}>
              <div className="footerwidget">
                <h4> Contact </h4>{" "}
                <p style={{ color: "white" }}>
                  {" "}
                  Lorem reksi this dummy text unde omnis iste natus error sit
                  volupum{" "}
                </p>{" "}
                <div className="contact-info">
                  <i className="fa fa-map-marker"> </i>Kerniles 416 - United
                  Kingdom <br />
                  <i className="fa fa-phone"> </i>+00 123 156 711 <br />
                  <i className="fa fa-envelope-o"> </i> youremail@email.com{" "}
                </div>{" "}
              </div>{" "}
            </Col>{" "}
          </Row>{" "}
          <div className="social d-flex justify-content-center">
            <Nav.Link as={NavLink} to="/">
              {" "}
              <i className="fa fa-twitter"> </i>{" "}
            </Nav.Link>{" "}
            <Nav.Link as={NavLink} to="/">
              {" "}
              <i className="fa fa-facebook"> </i>{" "}
            </Nav.Link>{" "}
            <Nav.Link as={NavLink} to="/">
              {" "}
              <i className="fa fa-dribbble"> </i>{" "}
            </Nav.Link>{" "}
            <Nav.Link as={NavLink} to="/">
              {" "}
              <i className="fa fa-flickr"> </i>{" "}
            </Nav.Link>{" "}
            <Nav.Link as={NavLink} to="/">
              {" "}
              <i className="fa fa-github"> </i>{" "}
            </Nav.Link>{" "}
          </div>{" "}
          <div className="clear"> </div>{" "}
        </Container>{" "}
        <div className="footer2">
          <Container>
            <Row>
              <Col md={6} className="panel">
                <div className="panel-body">
                  <p className="simplenav">
                    <Nav>
                      <Nav.Link to="/"> Home </Nav.Link> |{" "}
                      <Nav.Link to="/about"> About </Nav.Link> |{" "}
                      <Nav.Link to="/courses"> Courses </Nav.Link> |{" "}
                      <Nav.Link to="/price"> Price </Nav.Link> |{" "}
                      <Nav.Link to="/videos"> Videos </Nav.Link> |{" "}
                      <Nav.Link to="/contact"> Contact </Nav.Link>{" "}
                    </Nav>{" "}
                  </p>{" "}
                </div>{" "}
              </Col>{" "}
              <Col md={6} className="panel">
                <div className="panel-body">
                  <p className="text-center">
                    Copyright & copy; 2014. Template by{" "}
                    <a href="https://www.admecindia.com/" rel="develop">
                      {" "}
                      admecindia.com{" "}
                    </a>{" "}
                  </p>{" "}
                </div>{" "}
              </Col>{" "}
            </Row>{" "}
          </Container>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
