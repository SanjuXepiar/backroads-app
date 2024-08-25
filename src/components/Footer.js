import React from "react";
import { PageLinks } from "./Data";
import { SocialLinks } from "./Data";
export const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li>
              <a key={id} href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li>
              <a
                key={id}
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}.</span> all rights reserved
      </p>
    </footer>
  );
};
