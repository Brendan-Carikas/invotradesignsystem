
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
      <div className={cn("min-h-screen transition-all duration-200", 
        sidebarOpen ? "lg:pl-64" : "lg:pl-64"
      )}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar} 
              className="lg:hidden"
            >
              <Menu size={20} />
            </Button>
            
            <div className="relative hidden w-96 lg:block">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-full rounded-md border border-input pl-8"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {["Introduction", "Installation", "Typography"].map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="#"
                            >
                              <div className="text-sm font-medium leading-none">{item}</div>
                              <p className="line-clamp-2 mt-1 text-sm leading-snug text-muted-foreground">
                                Learn about the {item.toLowerCase()} of the design system.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {["UI Elements", "Layout", "Forms"].map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="#"
                            >
                              <div className="text-sm font-medium leading-none">{item}</div>
                              <p className="line-clamp-2 mt-1 text-sm leading-snug text-muted-foreground">
                                Browse our {item.toLowerCase()} collection.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary"></span>
            </Button>
            <ThemeToggle />
          </div>
        </header>
        
        {/* Page content */}
        <main className="min-h-[calc(100vh-4rem)] p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default VerticalShell;
