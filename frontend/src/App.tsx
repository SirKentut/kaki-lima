import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/homecooks/HomeCooksPage';
import NewUserPage from './pages/users/NewUserPage';
import UserExplorePage from './pages/users/UserExplorePage';
import HomeCooksMenu from './pages/homecooks/HomeCooksMenu';
import { User } from 'lucide-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

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
