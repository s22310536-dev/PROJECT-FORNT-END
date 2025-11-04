import React from "react";

const Footer = ({ text }) => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      {text || "Footer Section"}
    </footer>
  );
};

export default Footer;
