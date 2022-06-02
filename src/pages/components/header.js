import React from 'react';
import '../../styles/Header.css';
import {
    useNavigate,
    Navigate,
    useParams,
    useLocation,
  } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <div className="jumbotron">
        <h1>Daniel Nelson Professional Portfolio Website</h1>
        <div className='container'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => navigate("/about")}
                >
                    About Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => navigate("/projects")}
                >
                    Portfolio
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => navigate('/contact')}
                >
                    Contact
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#resume"

                    onClick={() => navigate('/skills')}
                                    >
                    Resume
                </a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Header;