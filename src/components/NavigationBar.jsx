import { useState } from "react";
import "./css/NavigationBar.css";
import Logo from "/images/Symbol.png";

function NavigationBar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const handleNavClick = (name) => {
    setActiveNav(name);
  };

  return (
    <div id="nav-container">
      <svg
        id="x-mark"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      <div className="nav-wrapper">
        <h3>Discover Your Dream Property with Estatein</h3>
        <a href="#">Learn More</a>
      </div>
      <div className="nav-wrapper-2">
        <div className="sub-wrapper-1">
          <img id="logo" src={Logo} alt="Logo" />
          <h2>Estatein</h2>
        </div>
        <div className="sub-wrapper-2">
          <nav>
            <ul>
              {["Home", "About Us", "Properties", "Services"].map((name) => (
                <li
                  key={name}
                  className={activeNav === name ? "active" : ""}
                  onClick={() => handleNavClick(name)}
                >
                  <a href="#">{name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="sub-wrapper-3">
          <button id="contact-us">Contact Us</button>
        </div>
      </div>
      <div className="mobile-nav-wrapper">
        <div className="mobile-sub-nav-1">
          <div className="mobile-nav-wrap">
            <img id="logo" src={Logo} alt="Logo" />
            <h2>Estatein</h2>
          </div>
          <svg
            id="bars"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            onClick={toggleMobileNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
        {showMobileNav && (
          <div className="mobile-sub-nav-2">
            <div className="sub-wrapper-2">
              <nav>
                <ul>
                  {["Home", "About Us", "Properties", "Services"].map(
                    (name) => (
                      <li
                        key={name}
                        className={activeNav === name ? "active" : ""}
                        onClick={() => handleNavClick(name)}
                      >
                        <a href="#">{name}</a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
            <div className="sub-wrapper-3">
              <button id="contact-us">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
