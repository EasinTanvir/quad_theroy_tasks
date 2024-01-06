import React from "react";
import { truncateText } from "../../utils/truncateText";
import { formatPrice } from "../../utils/formatPrice";

const Card = ({ Name, Price, ImageUrl }) => {
  return (
    <div className="flex flex-col gap-1 max-w-52 hover:scale-105 transition-all duration-200 cursor-pointer ">
      <div className="w-full min-h-64 max-h-64  rounded-3xl ">
        <img
          alt={Name}
          className="min-w-52  min-h-64 object-cover  rounded-xl"
          src={ImageUrl}
        />
      </div>

      <p className="text-center text-lg text-slate-500 font-semibold">
        {truncateText(Name)}
      </p>
      {/* <p className="text-center font-bold">{formatPrice(Price)}</p> */}
    </div>
  );
};

export default Card;
