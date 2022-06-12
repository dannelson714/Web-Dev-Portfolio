import React, { useEffect, useState } from "react";
import "../../styles/Header.css";
import {
  useNavigate,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

function Header() {
  const navigate = useNavigate();
  const [trans, setTrans] = useState(false);

  //To capture the logic for whether the hamburger is clicked on
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setTrans(window.pageYOffset > 50)
      );
    }
  }, []);
//as with above logic except conditional if(false) then set trueend result setActive(true)
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      if (!active) {
        setActive(true);
      }
      else {
        setActive(false);
      }
  });

  }
  
  )

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");



function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

  return (
    <header className={`header ${trans ? "trans" : ""}`}>
        <nav className="navbar">
            <a href="#home"  className="nav-logo" onClick={() => navigate("/")}>Daniel Nelson</a>
            <ul className={`nav-menu ${active ? "active" : ""}`}>
                <li className="nav-item">
                  <a href="#about" onClick={() => navigate("/about")}>
                    Biography
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#portfolio" onClick={() => navigate("/projects")}>
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/skills" onClick={() => navigate("/skills")}>
                    Experience
                  </a>               
                </li>
                <li className="nav-item">
                  <a href="#contact" onClick={() => navigate("/contact")}>
                    Contact
                  </a>             
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/dannelson"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Twitter />
                  </a>         
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/daniel-nelson-24a97123/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Linkedin />
                  </a>         
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/dannelson714"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Github />
                  </a>         
                </li>
            </ul>
            <div className={`hamburger ${active ? "active" : ""}`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
          
          
          
          
          
          
          
          
          
          
          
          
          
  );
}

export default Header;
