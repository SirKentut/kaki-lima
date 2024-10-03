import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeCooksPage from './pages/HomeCooksPage';
import NewUserPage from './pages/NewUserPage';
import { Checkbox } from 'components/ui/checkbox';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from 'components/ui/NavigationMenu';

// Define your navigation menu component
function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Recommended</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Kaki Lima</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Discover our best home-cooked meals.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/homecooks" title="Top Picks">
                Explore our top recommended dishes.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Favorites</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/homecooks" title="My Favorite Dishes">
                Your go-to meals and favorites.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Define the list item component for navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

// Main App Component
function App() {
  return (
    <Router>
      {/* Navigation Menu */}
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
