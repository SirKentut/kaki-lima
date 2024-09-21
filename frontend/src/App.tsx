import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeCooksPage from './pages/HomeCooksPage';
import NewUserPage from './pages/NewUserPage';
import { Checkbox } from "./components/ui/checkbox"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "components/ui/NavigationMenu"




function App() {
  return (
    <Router>
              {/* Navigation Menu */}
              <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Link One</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="#">Link Two</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      <div className="App">
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
