import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./brandnav.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  

  return (
    <nav className="sticky-top">
      <div className="nav">
        <span style={{ marginLeft: "2%" }}>
          <Link className="brandimg" to="/">
            <img src={logo} alt="logo" width="100" height="50" />
          </Link>
        </span>
        <span style={{marginLeft:"25%",marginRight:"10%"}}>
          <span
            onMouseEnter={() => {
              // alert("visit New & Featured Section")
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            New & Featured{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            Men{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            Women{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            Kids{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            Sale{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            Customise{"     "}
          </span>
          <span
            onMouseEnter={() => {
              console.log("HELLO");
            }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            SNKRS{"     "}
          </span>
          </span>
          <span>
            <button className="search1" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              className="search"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </span>
          <span style={{ marginRight:"2%" }}><i className="fa-regular fa-heart" ></i></span>
          <span style={{marginRight:"2%" }}><i className="fa-solid fa-bag-shopping" ></i></span>
      </div>
    </nav>
  );
};

export default Navbar;
