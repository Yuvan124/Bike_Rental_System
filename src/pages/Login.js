import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Header from "../components/Header/Header";
import { useUser } from "./UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUserEmail } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://cb2-cq47.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("userEmail", email);

      // Redirect to the home page or other routes
      window.location.href = "/home";
    } else {
      setError("Login failed");
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Login</h6>
              {error && <p className="text-danger">{error}</p>} {/* Display error message if available */}
              <Form onSubmit={handleLogin}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Login
                </button>
              </Form>

              <p className="mt-3">
                Don't have an account? <Link to="/register">Register here</Link>
              </p>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">{/* Additional content or information */}</div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
