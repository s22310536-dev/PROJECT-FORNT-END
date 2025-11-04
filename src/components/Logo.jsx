import React from "react";

const Logo = ({ text }) => (
  <div className="text-2xl font-bold text-blue-600 m-4">{text || "Logo"}</div>
);

export default Logo;
