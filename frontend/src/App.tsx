import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/HomeCooksPage';
import NewUserPage from './pages/NewUserPage';
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
        </Routes>
    </Router>
  );
}

export default App;
