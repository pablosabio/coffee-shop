import "./Header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHeart, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav>
        <ul className="nav-links">
          {["Home", "Shop", "About Us", "Contact Us"].map((link) => (
            <li
              key={link}
              className={activeLink === link ? "active" : ""}
              onClick={() => handleActiveLink(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <div className="icons">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>
          <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
        </div>
      </nav>
    </header>
  );
}
