import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate(); // Use useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("https://pb-yr7z.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });

    if (response.ok) {
      setRegistrationSuccess(true);

      // Redirect to the login page after a successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds (you can adjust the delay)
    } else {
      console.log("Registration failed");
      // Handle registration failure, show an error message, etc.
    }
  };

  return (
    <Helmet title="Register">
      <CommonSection title="Register" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Register</h6>
              {registrationSuccess && (
                <p className="text-success">Registration successful. Redirecting to login...</p>
              )}
              {!registrationSuccess && (
                <Form onSubmit={handleRegister}>
                  <FormGroup className="contact__form">
                    <Input
                      placeholder="Full Name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </FormGroup>
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
                    Register
                  </button>
                </Form>
              )}
              <p className="mt-3">
                Already have an account? <Link to="/login">Login here</Link>
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

export default Register;
