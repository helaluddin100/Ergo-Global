import Link from "next/link";
import React, { useState, useEffect } from "react";
import HowItWork from "../HowItWork";

function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <header className="header">
            <div className="logo">
              <Link href="/">
                <img src="/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>
            {/* <div className="menu-toggle" onClick={toggleMenu}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div> */}
            <ul className={`nav-links`}>
              {/* <div className="close-menu" onClick={toggleMenu}>
                <img src="/img/icon/close-menu.svg" alt="" />
              </div> */}
              <li>
                <Link href="https://ergoglobal.com/contact/">Contact Us</Link>
              </li>
              {/* <li>
                <Link href="/" onClick={openModal}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/test" className="contact-btn">
                  Get Started
                </Link>
              </li> */}
            </ul>
          </header>
        </div>
      </nav>
      <HowItWork isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
export default Header;
