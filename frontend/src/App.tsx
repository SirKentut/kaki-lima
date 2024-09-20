import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomeCooksPage from './pages/HomeCooksPage';
import NewUserPage from './pages/NewUserPage';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@components/ui/NavigationMenu";



function App() {
  return (
    <Router>
      <div className="App">
        
        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/homecooks">Home Cooks</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/users">Users</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        {/* Routes */}
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
