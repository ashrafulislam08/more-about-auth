import React from "react";

const FeedBack = ({ feedBackData }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {feedBackData.map((feed) => (
        <div className="card card-base w-96 shadow-xl">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <img
                className="w-12 h-12 rounded-full"
                src={feed.userImg}
                alt=""
              />
              <h2 className="ml-4">{feed.name}</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <p>{feed.review}</p>
            <div className="card-actions justify-end items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBack;
