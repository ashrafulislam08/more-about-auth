import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import FeedBack from "../components/FeedBack";

const Home = () => {
  const services = useLoaderData();
  const { servicesData, feedBackData } = services;
  return (
    <div>
      <Banner />

      <div className="grid grid-cols-4 gap-6">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
      <button className="mx-auto block btn btn-primary my-4">
        <NavLink to="/all-treatments">Show more</NavLink>
      </button>

      <FeedBack feedBackData={feedBackData} />
    </div>
  );
};

export default Home;
