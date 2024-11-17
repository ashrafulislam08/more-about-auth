import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="min-h-20 bg-blue-950 text-white flex justify-between items-center px-8">
      <div>
        <h1 className="text-xl font-bold">Teeth Wizard</h1>
      </div>
      <div className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all-treatments">All Treatment</NavLink>
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
