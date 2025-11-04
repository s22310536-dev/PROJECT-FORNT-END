import React from "react";

const Header = ({ text }) => (
  <div className="text-2xl font-bold text-blue-600">{text}</div>
);

const Home = ({ text }) => (
  <div className="text-lg text-gray-700">{text}</div>
);

const Footer = ({ text }) => (
  <div className="text-sm text-gray-500 mt-4 border-t pt-2">{text}</div>
);

const Logo = ({ text }) => (
  <div className="text-xl font-semibold text-indigo-500">{text}</div>
);

const Search = ({ text }) => (
  <div className="text-gray-700">{text}</div>
);

const TypeEffect = ({ text }) => (
  <div className="italic text-green-600">{text}</div>
);

const Generation = ({ text }) => (
  <div className="border rounded-md p-2 mt-2 bg-blue-50">
    <div className="font-medium text-blue-700">{text}</div>
    <div className="ml-4 text-gray-600">Gen</div>
  </div>
);

const Evolution = ({ text }) => (
  <div className="border rounded-md p-2 mt-2 bg-green-50">
    <div className="font-medium text-green-700">{text}</div>
    <div className="ml-4 text-gray-600">CardInfo</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center space-y-4">
      <Header text="Header" />
      <Home text="Home" />
      <Footer text="Footer" />

      <div className="bg-white rounded-lg shadow-md p-4">
        <Logo text="Logo" />
        <Search text="Search" />
        <TypeEffect text="TypeEffect" />
        <Generation text="Generation" />
        <Evolution text="Evolution" />
      </div>
    </div>
  );
}

export default App;
