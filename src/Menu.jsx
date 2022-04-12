import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink
        style={{ fontSize: "30px",textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/"
      >
        Apage
      </NavLink>
      <NavLink
        style={{ fontSize: "30px",textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/bpage"
      >
        Bpage
      </NavLink>
      <NavLink
        style={{ fontSize: "30px",textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/cpage/tanmoy/sharma"
      >
        Cpage
      </NavLink>
      <NavLink
        style={{ fontSize: "30px",textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active-style" : "none")}
        to="/dpage"
      >
        Dpage
      </NavLink>
    </>
  );
};

export default Menu;
