import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/homecooks/HomeCooksPage';
import NewUserPage from './pages/users/NewUserPage';
import HomeCooksMenu from './pages/homecooks/HomeCooksMenu';
import { Checkbox } from 'components/ui/checkbox';
import { UserNav} from 'components/ui/UserNav';
import { User } from 'lucide-react';


// Main App Component
function App() {
  return (
    <Router>
        {/* Routes */}
        <UserNav />
        <Routes>
          <Route path="/homecooks" element={<HomeCooksPage />} />
          <Route path="/" element={<NewUserPage />} />
          <Route path="/homecooks/menu" element={<HomeCooksMenu />} />
        </Routes>
    </Router>
  );
}

export default App;
