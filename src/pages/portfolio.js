import React from "react";

const styles = {
    pic: {
        
        
        imageRendering: "optimizeQuality",
        width: "50 px",
        height: "50 px",
        objectFit: "cover",
    }
}

export default function Portfolio(props) {
  return (
    
    <div className="container">
        <div className="row" style = {{ display: "flex", flexWrap: "wrap",}}>
            {/* <div className=""> */}
                {/* <ul className="list-group"> */}
                {props.projects.map(item => (
                    // <li className="list-group-item" key={item.id}>
                        <div 
                            className="project"
                            key={item.id}
                            style = {{
                                border: '.1em solid black',
                                borderRadius: ".5rem",
                                margin: "1rem",
                                fontSize: "1.5rem",
                                padding: "1rem .5rem",
                                transition: "all .07s ease",
                                width: "20rem",
                                textaAlign: "center",
                                color: "white",
                                background: "rgba(0,0,0,0.4)",
                                textShadow: "0 0 .5rem black",
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.img})`,
                                backgroundSize: "cover"
                            }}
                            >
                                <h5 className="card-title"> {item.name}</h5>
                                <a href={item.githubURL} className="card-text">Github Repository  |  </a>
                                <a href={item.deployedURL} className="card-text">Deployed App</a>
                        </div>       
                    // </li>
                ))}
                {/* </ul> */}
            {/* </div> */}
        </div>
    </div>
    
  );
}
