import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/homecooks/HomeCooksPage';
import NewUserPage from './pages/users/NewUserPage';
import UserExplorePage from './pages/users/UserExplorePage';
import HomeCooksMenu from './pages/homecooks/HomeCooksMenu';
import { Checkbox } from '@components/ui/checkbox';
import { User } from 'lucide-react';


// Main App Component
function App() {
  return (
    <Router>
        {/* Routes */}
        <Routes>
          <Route path="/homecooks" element={<HomeCooksPage />} />
          <Route path="/homecooks/menu" element={<HomeCooksMenu />} />
          <Route path="/" element={<NewUserPage />} />
          <Route path="explore" element={<UserExplorePage />} />
        </Routes>
    </Router>
  );
}

export default App;
