
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { 
  Menu, X, LayoutGrid, Home, Settings, Users, MessageSquare, 
  BarChart3, HelpCircle, Bell, Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface VerticalShellProps {
  children: React.ReactNode;
}

const VerticalShell = ({ children }: VerticalShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const primaryNavItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/components/layout/shells", icon: LayoutGrid, label: "Content Shells" },
    { to: "/messages", icon: MessageSquare, label: "Messages" },
    { to: "/analytics", icon: BarChart3, label: "Analytics" },
  ];
  
  const secondaryNavItems = [
    { to: "/settings", icon: Settings, label: "Settings" },
    { to: "/help", icon: HelpCircle, label: "Help & Support" },
  ];

  const NavItem = ({ to, icon: Icon, label, isActive = false }) => (
    <Link 
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="relative min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-card transition-transform duration-200 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar header - Logo area */}
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-lg font-bold">DesignSystem</span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="lg:hidden"
          >
            <X size={20} />
          </Button>
        </div>
        
        {/* Sidebar content - Navigation */}
        <div className="flex h-[calc(100vh-4rem)] flex-col justify-between overflow-y-auto py-4">
          <nav className="space-y-6 px-2">
            {/* Primary navigation */}
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground">
                MAIN NAVIGATION
              </h3>
              {primaryNavItems.map((item) => (
                <NavItem
                  key={item.label}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  isActive={location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)}
                />
              ))}
            </div>
            
            {/* Secondary navigation */}
            <div className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground">
                SETTINGS
              </h3>
              {secondaryNavItems.map((item) => (
                <NavItem
                  key={item.label}
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  isActive={location.pathname === item.to}
                />
              ))}
            </div>
          </nav>
          
          {/* User profile */}
          <div className="mt-auto border-t border-border px-3 pt-4">
            <Link 
              to="/components/layout/shells/user-profile" 
              className="flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-muted"
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", 
        sidebarOpen ? "lg:pl-64" : "lg:pl-64"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border/40 bg-background/80 px-4 backdrop-blur-sm">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="lg:hidden"
          >
            <Menu size={18} />
          </Button>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>
        
        {/* Page content */}
        <main className="h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto p-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VerticalShell;
