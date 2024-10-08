import React from "react";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import "@blueprintjs/core/lib/css/blueprint.css";
import Footer from "./Footer";
import Typewriter from 'typewriter-effect';

export default function Sidebar() {
  return (
    <div>
      <Header />
      <header id="head" class="secondary">
        <div class="container">
            <Typewriter options={{strings: ["Sidebar Heading"], autoStart: true, loop: true,}} />
          <p style={{color: "white", fontWeight: "200"}}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!{" "}
          </p>{" "}
        </div>{" "}
      </header>
      <Container>
        <Row>
          <article className="col-md-8 maincontent">
            <br />
            <br />
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras
              scelerisque cursus erat vitae interdum.Nam vehicula, felis eu
              semper tincidunt, mauris risus ultricies dolor, a tristique arcu
              libero sit amet felis.Donec venenatis sed velit eget
              dignissim.Mauris tempor purus enim, vitae ultricies arcu
              scelerisque vel.Suspendisse ultrices ut dolor nec laoreet.Mauris
              luctus elit odio, in hendrerit odio aliquet et.Morbi vitae diam
              felis.Mauris vulputate nisi erat, adipiscing pretium lacus lacinia
              quis.Sed consectetur ipsum et leo posuere vestibulum.Vivamus
              mattis fringilla ultrices.Donec sit amet tincidunt arcu, sit amet
              adipiscing felis.{" "}
            </p>
            <p>
              {" "}
              Cras accumsan sollicitudin eleifend.Nunc id lorem nulla.In pretium
              laoreet libero, at interdum nisi facilisis eget.Pellentesque
              dapibus, lectus in sollicitudin ullamcorper, urna sem sodales
              lacus, eget laoreet metus metus ut nibh.Integer tempor erat odio,
              quis eleifend lectus gravida in .Etiam sit amet tortor
              ullamcorper, interdum turpis gravida, convallis tortor.Ut
              venenatis lorem non iaculis malesuada.{" "}
            </p>
            <p>
              {" "}
              Suspendisse faucibus, mauris eget dictum facilisis, libero sem
              lacinia diam, at vestibulum nulla nisi quis nisi.Donec at tempus
              arcu, non consectetur diam.Morbi vehicula sit amet velit et
              aliquet.Maecenas vel dui tristique, ornare nibh a, consectetur
              magna.Nunc sagittis turpis sem, eu euismod ipsum eleifend et.Duis
              a ligula augue.Morbi laoreet est at urna pellentesque lacinia.{" "}
            </p>
            <h2> Facilis natus illum vitae doloremque </h2>{" "}
            <p>
              {" "}
              In eleifend diam ipsum, a hendrerit sapien vehicula sed.Donec
              fermentum dolor in diam accumsan ultrices.Nullam interdum diam ut
              urna ullamcorper, ut vulputate mi tincidunt.Sed volutpat a nunc ut
              ultrices.Suspendisse tempor ornare nisi ac rhoncus.Quisque id
              tellus justo.In in quam sed lorem dignissim egestas.Vivamus est
              libero, tempus et pretium ac, ultricies ac augue.Quisque placerat
              vitae nisi eget facilisis.Quisque consectetur neque in ornare
              accumsan.Praesent at molestie nunc.Proin sollicitudin arcu posuere
              accumsan pretium.Maecenas tincidunt lorem arcu, vel semper justo
              congue et.{" "}
            </p>
            <p>
              {" "}
              Aliquam sollicitudin in nulla ut sagittis.Fusce feugiat, sapien
              eget rutrum ullamcorper, lectus dui dapibus felis, blandit
              sagittis libero mi eu velit.Cras venenatis, arcu et ornare
              pharetra, quam ante accumsan libero, ac condimentum felis velit
              quis lacus.Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus.Suspendisse sit amet urna est.Proin
              vulputate laoreet turpis ut pulvinar.Ut sollicitudin sem dui, vel
              elementum velit venenatis a.Fusce scelerisque tortor in augue
              consectetur lacinia.In at mattis mi.{" "}
            </p>
            <blockquote class="bp4-blockquote">
              {" "}
              Venenatis, arcu et ornare pharetra, quam ante accumsan libero, ac
              condimentum felis velit quis lacus.Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.Suspendisse
              sit amet urna est.Proin vulputate laoreet turpis ut pulvinar.{" "}
            </blockquote>
            <p>
              {" "}
              Odit, laudantium, dolores, natus distinctio labore voluptates in
              inventore quasi qui nobis quis adipisci fugit id!Aliquam alias ea
              modi.Porro, odio, sed veniam hic numquam qui ad molestiae sint
              placeat expedita ? Perferendis, enim qui numquam sequi obcaecati
              molestiae fugiat!{" "}
            </p>{" "}
            <p>
              {" "}
              Dignissimos, beatae, praesentium illum eos autem perspiciatis ?
              Minus, non, tempore, illo, mollitia exercitationem tempora quas
              harum odio dolores delectus quidem laudantium adipisci ducimus
              ullam placeat eaque minima quae iure itaque corporis magni
              nesciunt eius sed dolor doloremque id quasi nisi.{" "}
            </p>{" "}
          </article>
          <aside className="col-md-4 sidebar sidebar-right">
            <div className="row panel">
              <div className="col-xs-12">
                <h3> Lorem ipsum dolor sit </h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras
                  scelerisque cursus erat vitae interdum.Nam vehicula, felis eu
                  semper tincidunt, mauris risus ultricies dolor, a tristique
                  arcu libero sit amet felis.Donec venenatis sed velit eget
                  dignissim.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="row panel">
              <div className="col-xs-12">
                <h3> Lorem ipsum dolor sit </h3>{" "}
                <p>
                  <img src="images/1.jpg" alt="" />
                </p>{" "}
                <p>
                  {" "}
                  Morbi vitae diam felis.Mauris vulputate nisi erat, adipiscing
                  pretium lacus lacinia quis.Sed consectetur ipsum.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </aside>{" "}
        </Row>{" "}
      </Container>{" "}
      <Footer />
    </div>
  );
}
