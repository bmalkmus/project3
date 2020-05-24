import React from "react";

function Footer(props) {
  const newDate = new Date()
  const year = newDate.getFullYear();
  return (
    <footer className="footer footer-default">
      <h1>Footer Content</h1>
    </footer>
  );
}

export default Footer;
