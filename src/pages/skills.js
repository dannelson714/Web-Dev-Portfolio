import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

import CV from '../images/CV.pdf';

export default function Skills() {
  return (
    <div>
      <Header />
      <h1>Please <a href={CV} style = {{color: "black",}}>view</a> my resume.</h1>
      <p>
      <ul>
        <li>Dynamic & Reactive Web Development | React.js, JavaScript, HTML5, CSS3, Bootstrap</li>
        <li>Data-Driven Computing | jQuery, RESTful APIs, JSON, AJAX</li>
        <li>Back-End Development | Node.js, Express.js, MySQL, Sequelize, NoSQL (MongoDB), Insomnia</li>
        <li>Scripting | Python, Linux bash/shell, Unit testing</li>
        <li>Progressive Web Application | Asynchronous & Distributed Computing</li>
        <li>General Computer Science | Data Structures, Algorithms, Resource Management</li>
      </ul>
      </p>
      <Footer />
    </div>

  );
}