import React from 'react';
import './styles/Header.css';

function Header() {
    return (
        <div className="jumbotron">
        <h1>Daniel Nelson Professional Portfolio Website</h1>
        <div className={`container${props.fluid ? '-fluid' : ''}`}>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About Me')}

                    className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}

                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}

                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
                </li>
                <li className="nav-item">
                <a
                    href="#resume"

                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
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