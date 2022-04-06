import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light header">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="https://github.com/tanmoy108"
            target="_blank"
          >
            Tanmoy keep
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
