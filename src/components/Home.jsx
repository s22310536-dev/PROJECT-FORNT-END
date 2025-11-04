import React from "react";

const Home = ({ text }) => {
  return (
    <main className="flex-1 bg-green-200 p-6 text-center text-lg">
      {text || "Main Content"}
    </main>
  );
};

export default Home;
