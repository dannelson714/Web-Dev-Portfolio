import React from "react";

function Footer() {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/dannelson"
            role="button"
            data-mdb-ripple-color="dark"
          >
          Twitter      
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/daniel-nelson-24a97123/"
            role="button"
            data-mdb-ripple-color="dark"
          >
          LinkedIn
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/dannelson714"
            role="button"
            data-mdb-ripple-color="dark"
          >
          Github
          </a>
        </section>
      </div>
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p className="text-dark">© 2022 Copyright: Daniel Nelson</p>
      </div>


    </footer>
  );
}

export default Footer;