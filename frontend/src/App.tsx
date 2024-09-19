import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomeCooksPage from './pages/HomeCooksPage'
import NewUserPage from './pages/NewUserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/homecooks" element={<HomeCooksPage />} />
        <Route path="/users" element={<NewUserPage/>} />
        <Route path="/" element={<h1 className="text-3xl font-bold underline">Welcome to the Kaki Lima App!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
