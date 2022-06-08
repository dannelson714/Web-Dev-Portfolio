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
        <header>
            <h1 className='special-move'><span className="special-color"></span>Daniel Nelson</h1>
            <nav className="text-right">
            <li><a 
                    href="#home"
                    onClick={() => navigate("/")}
                >Home</a>
            </li>
            <li><a 
                    href="#about"
                    onClick={() => navigate("/about")}
                >Biography</a>
            </li>
            <li><a 
                    href="#portfolio"
                    onClick={() => navigate("/projects")}
                >Portfolio</a>
            </li>
            <li><a 
                    href="#artistic"
                    onClick={() => navigate("/artistic")}
                >Artistic</a>
            </li>
            <li><a 
                    href="/skills"
                    onClick={() => navigate("/skills")}
                >Experience</a>
            </li>
            <li><a 
                    href="#contact"
                    onClick={() => navigate("/contact")}
                >Contact</a>
            </li>
            </nav>

        </header>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Daniel Nelson</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div className="navbar-nav">
        //         <a className="nav-item nav-link active" 
        //             href="#">About <span class="sr-only">(current)</span></a>
        //         <a className="nav-item nav-link" href="#">Features</a>
        //         <a className="nav-item nav-link" href="#">Pricing</a>
        //         <a className="nav-item nav-link disabled" href="#">Disabled</a>
        //         </div>
        //     </div>
        // </nav>
    //     <div className="jumbotron">
    //     <h1>Daniel Nelson Professional Portfolio Website</h1>
    //     <div className='container'>
    //         <ul className="nav nav-tabs">
    //             <li className="nav-item">
    //             <a
    //                 href="#about"
    //                 onClick={() => navigate("/about")}
    //             >
    //                 About Me
    //             </a>
    //             </li>
    //             <li className="nav-item">
    //             <a
    //                 href="#portfolio"
    //                 onClick={() => navigate("/projects")}
    //             >
    //                 Portfolio
    //             </a>
    //             </li>
    //             <li className="nav-item">
    //             <a
    //                 href="#contact"
    //                 onClick={() => navigate('/contact')}
    //             >
    //                 Contact
    //             </a>
    //             </li>
    //             <li className="nav-item">
    //             <a
    //                 href="#resume"

    //                 onClick={() => navigate('/skills')}
    //                                 >
    //                 Resume
    //             </a>
    //             </li>
    //         </ul>
    //     </div>
    //   </div>
    );
}
  
export default Header;