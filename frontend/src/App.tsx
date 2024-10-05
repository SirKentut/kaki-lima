import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/HomeCooksPage';
import NewUserPage from './pages/NewUserPage';
import { Checkbox } from 'components/ui/checkbox';
import {
  NavigationMenuDemo,
} from 'components/ui/NavigationMenu';



// Main App Component
function App() {
  return (
    <Router>
      <NavigationMenuDemo />
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/homecooks" element={<HomeCooksPage />} />
          <Route path="/" element={<NewUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
