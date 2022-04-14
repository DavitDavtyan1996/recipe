import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className="list">
      <NavLink to="/cuisine/Italian" className="menu">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to="/cuisine/American" className="menu">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisine/Thai" className="menu">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to="/cuisine/Japanese" className="menu">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
};


export default Category;
