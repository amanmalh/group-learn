import { Row, Col } from "antd";
import Login from "./Login";
import Hero from "./Hero";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div id="landing">
        <Row>
          <Col md={12}>
            <Hero />
          </Col>
          <Col md={12}>
            <div id="auth-container">
              <Login />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Landing;
