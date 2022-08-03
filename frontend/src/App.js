import './App.css';
import React from 'react';
import Engine from './components/Engine'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <main>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Engine />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;

// export default function App() {
//   return <Engine/>
// }
