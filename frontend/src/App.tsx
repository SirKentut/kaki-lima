import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomeCooksPage from './pages/HomeCooksPage'

function App() {
  return (
    <Router>
      <div>Welcome to the main page</div>
      <div className="App">
        <Routes>
        <Route path="/homecooks" element={<HomeCooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
