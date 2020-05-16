import React from "react";

function Main(props) {
    return (
        <div className="main">
            <div className="container p-3">
                <h1>{props.name}</h1>
                {props.children}
            </div>
        </div>        
    );
}

export default Main;