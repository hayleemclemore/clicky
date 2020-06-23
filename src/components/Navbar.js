import React from "react";

const Navbar = (props) => (
  <div className="bg-dark navbar-dark container-fluid text-center pt-1 pb-1">
    <div className="row">
      <div className="col-md-4">
        <h2>
          <a href="." className="text-white nounderline" id="app-name">
            Clicky Game
          </a>
        </h2>
        </div>
        <div className="col-md-4">
          <h3>{props.message}</h3>
        </div>
        <div className="col-md-4 text-muted">
          <h3>Score: {props.score} | Top Score: {props.highScore} </h3>
        </div>
    
    </div>
  </div>
);

export default Navbar;
