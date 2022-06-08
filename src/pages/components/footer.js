import React from "react";
import '../../styles/Footer.css';
import { Github, Twitter, Linkedin } from 'react-bootstrap-icons'

function Footer() {
  return (
    <footer
      className="text-center text-white"
    >
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/dannelson"
            role="button"
            data-mdb-ripple-color="dark"
          >
          <Twitter />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/daniel-nelson-24a97123/"
            role="button"
            data-mdb-ripple-color="dark"
          >
          <Linkedin />
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/dannelson714"
            role="button"
            data-mdb-ripple-color="dark"
          >
          <Github /> 
          </a>
          <p className="text-dark copyright">© 2022 Copyright: Daniel Nelson</p>
        
      
        

    </footer>
  );
}

export default Footer;