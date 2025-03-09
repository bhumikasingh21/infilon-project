import React, { useState } from "react";
import { CloseIcon, logo, Menu } from "../assets/svg";

const mainNav = [
  {
    name: "Home",
    url: "/infilon-project/",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activePath = window.location.pathname;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="header">
      <div className="innerHeader container">
        <div className="logo">
          <img
            src={logo}
            alt="Central Texas Fly Fishing Logo"
          />
          <h4>Central Texas Fly Fishing</h4>
        </div>
        <nav>
          <ul className={`navLinks ${isMobileMenuOpen ? "open" : ""}`}>
            {mainNav.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className={`${activePath === item.url ? "active" : ""}`}
                >
                  {item.name}
                </a>
                {/* we can also use react router but here we don't have other pages that's why we are using href */}
              </li>
            ))}
          </ul>
          {isMobileMenuOpen ?  <div className='crossIcon' onClick={toggleMobileMenu}>
            <img src={CloseIcon} alt="close" />
          </div> :
          <div className='menuIcon' onClick={toggleMobileMenu}>
          <img src={Menu} alt="menu" />
        </div>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
