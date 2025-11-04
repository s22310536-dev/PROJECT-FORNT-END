// components/AllComponents.jsx
import React from 'react';

// Home Component
const Home = ({ text = "Home" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Home</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// Search Component
const Search = ({ text = "Search" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Search</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// CardInfo Component
const CardInfo = ({ text = "Card-Info" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Card-Info</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// Evolution Component
const Evolution = ({ text = "Evolution" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Evolution</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// TypeEffect Component
const TypeEffect = ({ text = "Type-Effect" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Type-Effect</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// Logo Component
const Logo = ({ text = "Logo" }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Logo</h2>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

// Export semua komponen
export { Home, Search, CardInfo, Evolution, TypeEffect, Logo };