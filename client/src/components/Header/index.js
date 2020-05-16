import React from "react";

function Header(props) {

  return (
    <nav className={"navbar " + props.custom} color-on-scroll="100">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="#">
          Product Search </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <NavLink active={props.page==="search"} name="Search" href="search" />
          <NavLink active={props.page==="saved"} name="Saved" href="saved" />
        </ul>
      </div>
    </div>
  </nav>
  );
}

function NavLink(props) {
  if (props.active) {
    return (
      <li className="nav-item active">
        <a className="nav-link" href={props.href}>{props.name}</a>
      </li>
    )
  }
  else {
    return (
      <li className="nav-item">
        <a className="nav-link" href={props.href}>{props.name}</a>
      </li>
    )
  }
}

export default Header;
