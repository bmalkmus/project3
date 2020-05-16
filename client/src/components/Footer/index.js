import React from "react";

function Footer(props) {
  const newDate = new Date()
  const year = newDate.getFullYear();
  return (
    <footer className="footer footer-default">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a href="https://www.creative-tim.com/">
                Creative Tim
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright float-right">
          &copy;
          {year} 
          , made with <i className="material-icons">favorite</i> by
          <a href="https://www.creative-tim.com/" target="blank">Creative Tim</a> for a better web.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
