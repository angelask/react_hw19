import React from "react";
import SearchForm from "./SearchForm.js";
import "./style.css";

function Navbar({ handleSearchChange }) {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
          <Link className="navbar-brand" to="/">
        Search
      </Link>
        <div className="navbar-collapse row" id="navbarNav">
          <SearchForm handleSearchChange={handleSearchChange} />
        </div>
      </nav>
    );
  }
  export default Navbar;