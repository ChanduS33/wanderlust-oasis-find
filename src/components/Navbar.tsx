
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Menu, User, Search } from "lucide-react";
import AuthModal from "./AuthModal";

const Navbar: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const openAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-booking-primary">BookingApp</span>
        </Link>
        
        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>
                <Link to="/properties" className="text-lg font-medium">
                  Properties
                </Link>
                <Button 
                  onClick={() => openAuth("login")} 
                  className="w-full mt-4" 
                  variant="outline"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => openAuth("signup")} 
                  className="w-full"
                >
                  Sign Up
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-booking-primary transition-colors">
            Home
          </Link>
          <Link to="/properties" className="text-sm font-medium hover:text-booking-primary transition-colors">
            Properties
          </Link>
          <div className="hidden lg:block">
            <Button 
              variant="outline" 
              className="rounded-full px-4 py-2 border border-gray-200 hover:border-booking-primary"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full border border-gray-200">
                <User className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => openAuth("login")}>
                Login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => openAuth("signup")}>
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        type={authType} 
        onSwitchType={(type) => setAuthType(type)} 
      />
    </header>
  );
};

export default Navbar;
