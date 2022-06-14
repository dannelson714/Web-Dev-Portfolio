import React from "react";
import "../styles/Portfolio.css"


export default function Portfolio(props) {
  return (
    
    <div className="container">
        <div className="row" style = {{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {/* <div className=""> */}
                {/* <ul className="list-group"> */}
                {props.projects.map(item => (
                    // <li className="list-group-item" key={item.id}>
                        <div 
                            className="project"
                            key={item.id}
                            style = {{
                                border: '.01em solid black',
                                margin: "1rem",
                                fontSize: "1.5rem",
                                padding: ".5rem .5rem",
                                height: "9rem",
                                width: "18rem",
                                justifyContent: "center",
                                color: "white",
                                background: "rgba(0,0,0,0.4)",
                                textShadow: "0 0 .5rem black",
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.img})`,
                                backgroundSize: "cover",
                            }}
                            >
                                <span className='front-side'>
                                    <h5 className="card-title"> {item.name}</h5>
                                </span>
                                <span className='back-side'>
                                    <a href={item.githubURL} className="github">Github Repository |</a>
                                    <a href={item.deployedURL}>  Deployed App</a>
                                    <p className="card-text">Technology Used: </p>
                                    <p className="tech-text">{item.tech}</p>
                                </span>
                        </div>       
                    // </li>
                ))}
                {/* </ul> */}
            {/* </div> */}
        </div>
        <div style={{height: "80px", width:"100%", clear:"both"}}></div>
    </div>
    
  );
}
