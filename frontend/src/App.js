import './App.css';
import React from 'react';
import Engine from './components/Engine'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Form from './components/Form'
import NewEngine from './pages/NewEngine'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Engine />} />
            <Route path="/test" element={<Form />} />
            <Route path="/new" element={<NewEngine />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;