import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const AllTreatment = () => {
  const services = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      {services.map((service) => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
};

export default AllTreatment;
