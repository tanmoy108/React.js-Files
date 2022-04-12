import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/"
      >
        Apage
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/bpage"
      >
        Bpage
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/cpage/tanmoy"
      >
        Cpage
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/dpage"
      >
        Dpage
      </NavLink>
    </>
  );
};

export default Menu;
