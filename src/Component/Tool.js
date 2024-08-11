import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Tool() {
    return (
        <div>
            <Container>
        <section
          id="portfolio"
          className="page-section section appear clearfix"
        >
          <Row>
            <Col md={12}>
              <div className="row d-block">
                <div
                  className="portfolio-items gap-4 isotopeWrapper isotope clearfix"
                  id="3"
                >
                  <article class="col-sm-4 isotope-Item webdesign">
                    <div class="portfolio-item">
                      <img src="../images/portfolio/img5.jpg" alt="" />
                      <div className="portfolio-desc align-center">
                        <div className="folio-info">
                          <a href="/" className="fancybox">
                            <h5> Project Title </h5>
                            <i class="fa fa-link fa-2x"> </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="col-sm-4 isotope-Item webdesign">
                    <div className="portfolio-item">
                      <img src="../images/portfolio/img6.jpg" alt="" />
                      <div className="portfolio-desc align-center">
                        <div className="folio-info">
                          <a
                            href="/"
                            className="fancybox"
                          >
                            <h5> Project Title </h5>
                            <i class="fa fa-link fa-2x"> </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="col-sm-4 isotope-Item webdesign">
                    <div className="portfolio-item">
                      <img src="../images/portfolio/img7.jpg" alt="" />
                      <div className="portfolio-desc align-center">
                        <div className="folio-info">
                          <a
                            href="/"
                            className="fancybox"
                          >
                            <h5> Project Title </h5>
                            <i className="fa fa-link fa-2x"> </i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
        </div>
    );
}

export default Tool;