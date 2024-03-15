import React from 'react'
import { Link } from 'react-router-dom';
import brand from '../assets/brand.png';
import "./brandnav.css";
const BrandNav = () => {
  return (
      <nav>
        <div className="brandnav">
          <span style={{marginLeft:"2.5%"}}>
            <Link to="/" style={{marginLeft:"20%"}}>
                <img src={brand} alt="brand" width="30"/>
            </Link>
          </span>
          <span style={{width:"100%",justifyContent:'end',display:"flex"}}>
            <span style={{whiteSpace:"pre-wrap", fontSize:"12px",marginRight:"4%"}}><b>Find a Store{"    "}|{"    "}Help{"    "}|{"    "}Join Us{"    "}|{"    "}Sign In</b></span>
          </span>
        </div>
      </nav>
  )
}

export default BrandNav
