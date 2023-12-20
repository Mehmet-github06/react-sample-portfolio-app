import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const location = useLocation();

  let footerStyle = "horizontal"; // Varsayılan stillerden biri

  if (location.pathname === "/about") {
    footerStyle = "vertical"; // About sayfasındaysak vertical stilini kullan
  } else if (location.pathname === "/projects") {
    footerStyle = "vertical"; // Projects sayfasındaysak vertical stilini kullan
  } else if (location.pathname.includes("/projects/")) {
    footerStyle = "vertical"; // ProjectsDetails sayfasındaysak vertical stilini kullan
  } else if (location.pathname === "/contact") {
    footerStyle = "middle"; // Contact sayfasındaysak middle stilini kullan
  }

  return (
    <footer className={footerStyle}>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-github fa-2x" />
        </a>
        </div>
      <div className="copyright">© Copyright 2023</div>
    </footer>
  );
};

export default Footer;
