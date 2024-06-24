import React from "react";

const ControllerCard = ({ controller }) => {
  const { imgUrl, ControllerName, ControllerPrice } = controller;
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          src={imgUrl}
          alt="Controller Image"
          className="max-w-[320px] h-[300px] w-full rounded-lg bg-gray-600 object-cover"
        />
      </div>
      <div className="font-jura font-bold text-xl">
        <p>{ControllerName}</p>
        <p>{ControllerPrice}</p>
      </div>
    </div>
  );
};

export default ControllerCard;
