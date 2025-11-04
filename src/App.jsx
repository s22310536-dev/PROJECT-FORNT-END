import React from 'react';
import Header from './components/Header';
import MainContent from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;