import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");

  return (
    <header>
        <div className="logo">
            desain.in
        </div>
        <nav>
            <ul>
                <li><a>Find a printer</a></li>
                <li><a>Community</a></li>
                <li><a>Become a designer</a></li>
            </ul>
            <ul>
                <li><a>Sign in</a></li>
                <li><a>Join</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;
