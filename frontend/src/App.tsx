import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/homecooks/HomeCooksPage';
import NewUserPage from './pages/users/NewUserPage';
import UserExplorePage from './pages/users/UserExplorePage';
import HomeCooksMenu from './pages/homecooks/HomeCooksMenu';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Main App Component
function App() {
  return (
    <>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    <Router>
        {/* Routes */}
        <Routes>
          <Route path="/homecooks" element={<HomeCooksPage />} />
          <Route path="/homecooks/menu" element={<HomeCooksMenu />} />
          <Route path="/" element={<NewUserPage />} />
          <Route path="explore" element={<UserExplorePage />} />
        </Routes>
    </Router>
    </>
  );
  
}

export default App;
