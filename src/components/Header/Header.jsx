import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { useUser } from "../../pages/UserContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Bikes",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = (props) => {
  const menuRef = useRef(null);
  const { email, logout } = useUser();

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  useEffect(() => {
    const header = document.querySelector(".header");
    const scrollPosition = 100; // Adjust this value based on your design.

    const handleScroll = () => {
      if (window.scrollY > scrollPosition) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Contact:</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill"></i> 8754645666
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
            <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                {email ? ( // Display email and a logout link if the user is logged in
                  <>
                    <div className="user-email">
                      <i className="ri-mail-line"></i> {email}
                    </div>
                    <button className="d-flex align-items-center gap-1" onClick={logout}>
                      <i className="ri-logout-circle-line"></i> Logout
                    </button>
                  </>
                ) : (
                  // Display the login link if the user is not logged in
                  <Link to="/login" className="d-flex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i> Login
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <button className="header__btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i>  For More detials
                </Link>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
