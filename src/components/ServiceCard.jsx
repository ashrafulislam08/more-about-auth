import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatment, image, description, cost, id } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{treatment}</h2>
        <p title={description}>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            <button className="badge badge-outline">Checkout More</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;