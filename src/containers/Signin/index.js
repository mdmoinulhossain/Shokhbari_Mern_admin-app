import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Layout from "./../../components/Layout/index";
import Input from "./../../components/Ui/Input/index";

const Signin = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
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

export default Signin;
