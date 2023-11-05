import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import SearchBar from './Components/SearchBar';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/Aboutus';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';

function Home() {
  return (
    <div className='content'>
      <SearchBar />
      <Cards />
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;