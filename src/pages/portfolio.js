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
                                borderRadius: ".5rem",
                                margin: "1rem",
                                fontSize: "1.5rem",
                                padding: "1rem .5rem",
                                transition: "all 70s ease",
                                width: "20rem",
                                // textAlign: "center",
                                justifyContent: "center",
                                color: "white",
                                background: "rgba(0,0,0,0.4)",
                                textShadow: "0 0 .5rem black",
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.img})`,
                                backgroundSize: "cover"
                            }}
                            >
                                <span className='front-side'>
                                    <h5 className="card-title"> {item.name}</h5>
                                </span>
                                <span className='back-side'>
                                    <a href={item.githubURL} className="card-text">Github Repository  |  </a>
                                    <a href={item.deployedURL} className="card-text">Deployed App</a>
                                    <p>Technology Used: </p>
                                </span>
                        </div>       
                    // </li>
                ))}
                {/* </ul> */}
            {/* </div> */}
        </div>
    </div>
    
  );
}
