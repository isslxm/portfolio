import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import FirstYear from './Pages/FirstYear';
import '../src/Components/Footer.css';
import '../src/Components/Navbar.css';

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/first-year" element={<FirstYear />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;