import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-grow pt-[84px]">
        <AppRoutes />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
