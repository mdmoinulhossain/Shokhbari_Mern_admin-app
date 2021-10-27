import React from "react";
import Layout from "./../../components/Layout/index";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "./../../components/Ui/Input/index";

const Signup = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Input
                      Label="First Name"
                      placeholder="First Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>

                  <Col md={6}>
                    <Input
                      Label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>

                <Input
                  Label="Email address"
                  placeholder="Email address"
                  value=""
                  type="email"
                  onChange={() => {}}
                />

                <Input
                  Label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={() => {}}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Signup;
