import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <header className="header">
            <div className="logo">
              <Link href="/">
                <img src="/img/logo/logo.png" alt="Logo" />
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">How it works</Link>
              </li>
              <li>
                <Link href="/" className="contact-btn">Get Started</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </header>
        </div>
      </nav>
    </>
  );
}
export default Header;
