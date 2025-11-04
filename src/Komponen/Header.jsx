import React from 'react';

// Komponen Logo
function Logo({ text }) {
  return (
    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      <h2 className="text-xl font-semibold">{text}</h2>
    </div>
  );
}

// Komponen Gen1
function Gen1({ text }) {
  return (
    <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 text-center hover:bg-red-200 transition duration-300">
      <span className="text-red-700 font-medium text-lg">{text}</span>
    </div>
  );
}

// Komponen Gen2
function Gen2({ text }) {
  return (
    <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center hover:bg-blue-200 transition duration-300">
      <span className="text-blue-700 font-medium text-lg">{text}</span>
    </div>
  );
}

// Komponen Gen3
function Gen3({ text }) {
  return (
    <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center hover:bg-green-200 transition duration-300">
      <span className="text-green-700 font-medium text-lg">{text}</span>
    </div>
  );
}

// Komponen Gen4
function Gen4({ text }) {
  return (
    <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 text-center hover:bg-purple-200 transition duration-300">
      <span className="text-purple-700 font-medium text-lg">{text}</span>
    </div>
  );
}

// Komponen Generations (Parent untuk semua Gen)
function Generations() {
  return (
    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">Generations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Gen1 text="Gen 1" />
        <Gen4 text="Gen 4" />
        <Gen2 text="Gen 2" />
        <Gen3 text="Gen 3" />
      </div>
    </div>
  );
}

// Komponen Header (Parent untuk Logo dan Generations)
function Header() {
  return (
    <header className="bg-white shadow-lg rounded-xl p-8 mb-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Header</h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <Logo text="Logo" />
          <Generations />
        </div>
      </div>
    </header>
  );
}

// Komponen utama App
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="bg-white rounded-xl p-6 shadow-md mt-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            React Components Hierarchy
          </h2>
          <div className="text-gray-600 text-center">
            <p>Struktur komponen: App → Header → (Logo + Generations) → (Gen1, Gen2, Gen3, Gen4)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;