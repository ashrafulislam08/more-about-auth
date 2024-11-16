import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="min-h-20 bg-red-500 flex justify-between items-center px-8">
      <div>Teeth Wizard</div>
      <div className="space-x-4 text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-treatment">All Treatment</NavLink>
        <NavLink to="/my-appointment">My Appointment</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <div>
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
