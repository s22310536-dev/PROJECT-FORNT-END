import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = ({ text }) => {
  return (
    <div className="p-3 bg-yellow-300 rounded-lg m-2 text-center">
      <p className="font-semibold">{text}</p>
      <div className="flex justify-center flex-wrap">
        <Evolution text="Evolution" />
        <TypeEffect text="Type-Effect" />
        <Logo text="Logo" />
      </div>
    </div>
  );
};

export default CardInfo;
