import React from "react";
import logo from "../images/logo.svg";
import { PageLinks, SocialLinks } from "../components/Data";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {PageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li>
                <a key={id} href={href} rel="noreferrer" className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {SocialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li>
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
