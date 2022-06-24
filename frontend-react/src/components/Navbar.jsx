import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  // To get current path
  const location = useLocation();
  // Iterate over nav items to add into UI
  const navItems = [
    { link: "", name: "Login" },
    { link: "/register", name: "Signup" },
  ];
  return (
    <nav className="top-bar">
      <ul className="nav-items">
        {navItems.map((navItem, index) => {
          return (
            <NavLink key={index} to={navItem.link}>
              <li>{navItem.name}</li>
            </NavLink>
            
          );
        })}
        {location.pathname.includes("auth") && (
          <NavLink to="">
            <li>Logout</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
