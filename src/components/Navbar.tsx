import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full py-4 px-6 bg-white dark:bg-gray-950 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Ago
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/get-started"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  Get started
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/features"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
