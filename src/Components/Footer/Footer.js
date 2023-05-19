import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <a href="/about" style={{ fontWeight: "500" }}>
          Tesla &copy; {new Date().getFullYear()}
        </a>
        <a href="/legal">Privacy & Legal</a>
        <a href="/vehicle-recalls">Vehicle Recalls</a>
        {window.innerWidth >= 480 && <a href="/contact">Contact</a>}
        <a href="/careers">Careers</a>
        <a href="/new">New</a>
        {window.innerWidth >= 480 && <a href="/engage">Engage</a>}
        {window.innerWidth >= 480 && <a href="/locations">Locations</a>}
      </div>
    </div>
  );
}

export default Footer;
