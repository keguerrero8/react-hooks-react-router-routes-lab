import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" style={{margin : "10px", padding : "5px", backgroundColor : "blue", color : "white"}}>
        Home
      </NavLink >
      <NavLink exact to="/movies" style={{margin : "10px", padding : "5px", backgroundColor : "blue", color : "white"}}>
        Movies
      </NavLink >
      <NavLink exact to="/directors" style={{margin : "10px", padding : "5px", backgroundColor : "blue", color : "white"}}>
        Directors
      </NavLink >
      <NavLink exact to="/actors" style={{margin : "10px", padding : "5px", backgroundColor : "blue", color : "white"}}>
        Actors
      </NavLink >
    </div>
  )
}

export default NavBar;
