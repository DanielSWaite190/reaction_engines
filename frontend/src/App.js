import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainFeed from './components/MainFeed'
import DetailCard from './components/DetailCard'
import NewEngine from './pages/NewEngine'
import EdditEngine from './pages/EdditEngine'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<MainFeed />} />
            <Route path="/new" element={<NewEngine />} />
            <Route path="/engine/:id" element={<DetailCard />} />
            <Route path="/engine/:id/eddit" element={<EdditEngine />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;