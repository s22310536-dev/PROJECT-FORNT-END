import React from "react";

const Header = ({ text }) => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
      {text || "Header Section"}
    </header>
  );
};

export default Header;

