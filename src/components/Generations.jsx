import React from "react";
import Gen from "./Gen";

const Generations = ({ text }) => {
  return (
    <div className="p-3 bg-purple-300 rounded-lg m-2 text-center">
      <p className="font-semibold">{text}</p>
      <div className="flex justify-center flex-wrap">
        <Gen text="Gen 1" />
        <Gen text="Gen 2" />
        <Gen text="Gen 3" />
        <Gen text="Gen 4" />
      </div>
    </div>
  );
};

export default Generations;
