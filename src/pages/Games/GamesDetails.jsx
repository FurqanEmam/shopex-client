import React from "react";

const GamesDetails = ({ details }) => {
  const {
    gameName,
    gameMaker,
    imgUrl1,
    createdYear,
    description,
    genre,
    isMultiplayer,
    isFree,
  } = details;
  return (
    <div>
      <div className="my-5">
        <div className="max-w-80 space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#ffffff]">
          <div className="flex flex-col space-y-1.5">
            <h3 className="text-2xl font-semibold ">{gameName}</h3>
            <p className="text-sm text-black ">{description}</p>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-center text-2xl font-medium">$199.99</h2>
            <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">
              Category: {genre}
            </p>
          </div>
          <img
            width={400}
            height={300}
            className="h-[300px] w-full rounded-lg bg-gray-600 object-cover"
            src={imgUrl1}
            alt="card navigate ui"
          />
          <button className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesDetails;
