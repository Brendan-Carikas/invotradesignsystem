import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, LayoutGrid, LayoutPanelTop, Layout, Package, AlertCircle, Heading, PanelTop, Grid, LineChart, FormInput, Bot, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
  isActive: boolean;
  action?: string;
}
const NavItem = ({
  to,
  icon: Icon,
  label,
  isCollapsed,
  isActive,
  action
}: NavItemProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e: React.MouseEvent) => {
    if (action === 'logout') {
      e.preventDefault();
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };

  return <Link 
    to={to} 
    className={cn("flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200", "hover:bg-primary/10", isActive ? "bg-primary/10 text-primary" : "text-foreground/80 hover:text-foreground")}
    onClick={handleClick}
  >
    <Icon size={18} />
    {!isCollapsed && <span className="animate-fade-in text-sm">{label}</span>}
  </Link>;
};

interface NavGroupProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
  addTopMargin?: boolean;
}
const NavGroup = ({
  title,
  children,
  isCollapsed,
  addTopMargin = false
}: NavGroupProps) => {
  return <div className={cn("mb-4", addTopMargin ? "mt-10 pt-4 border-t border-border/30" : "")}>
      {!isCollapsed && <div className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </div>}
      <div className="space-y-1">
        {children}
      </div>
    </div>;
};

interface AppShellProps {
  children: React.ReactNode;
}
const AppShell = ({
  children
}: AppShellProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const navGroups = [{
    title: "Overview",
    items: [{
      to: "/home",
      icon: LayoutGrid,
      label: "Overview"
    }]
  }, {
    title: "Structure",
    items: [{
      to: "/components/application-shells",
      icon: LayoutPanelTop,
      label: "Application Shells"
    }, {
      to: "/components/layout/shells",
      icon: Layout,
      label: "Content Shells"
    }]
  }, {
    title: "Basics",
    items: [{
      to: "/components/foundation",
      icon: Package,
      label: "Foundation"
    }, {
      to: "/components/iconography",
      icon: Package,
      label: "Iconography"
    }, {
      to: "/components/feedback",
      icon: AlertCircle,
      label: "Feedback"
    }, {
      to: "/components/headings",
      icon: Heading,
      label: "Headings"
    }]
  }, {
    title: "Interface",
    items: [{
      to: "/components/overlays",
      icon: PanelTop,
      label: "Overlays"
    }, {
      to: "/components/grid-data-display",
      icon: Grid,
      label: "Grid Data Display"
    }, {
      to: "/components/data-visualization",
      icon: LineChart,
      label: "Data Visualization"
    }, {
      to: "/components/forms",
      icon: FormInput,
      label: "Forms"
    }]
  }, {
    title: "Conversation Design",
    items: [{
      to: "/components/chatbot",
      icon: Bot,
      label: "Chatbot"
    }]
  }];

  return <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside className={cn("fixed inset-y-0 left-0 z-20 flex flex-col border-r border-border/40 bg-sidebar transition-all duration-300 ease-in-out dark:bg-sidebar", sidebarCollapsed ? "w-16" : "w-64", "hidden md:flex")}>
        <div className="flex h-16 items-center justify-between gap-2 border-b border-border/40 px-4">
          {!sidebarCollapsed && <Link to="/" className="flex items-center gap-2 animate-fade-in">
              <span className="text-lg font-semibold text-primary">DesignSystem</span>
            </Link>}
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto text-muted-foreground">
            <Menu size={18} />
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
          {navGroups.map(group => <NavGroup 
              key={group.title} 
              title={group.title} 
              isCollapsed={sidebarCollapsed}
              addTopMargin={["Structure", "Basics", "Interface", "Conversation Design"].includes(group.title)}
            >
              {group.items.map(item => <NavItem 
                key={item.to} 
                to={item.to} 
                icon={item.icon} 
                label={item.label} 
                isCollapsed={sidebarCollapsed} 
                isActive={location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)} 
              />)}
            </NavGroup>)}
        </nav>
        
        {/* Footer with logout button */}
        <div className="mt-auto border-t border-border/40 p-2">
          <NavItem 
            to="/" 
            icon={LogOut} 
            label="Logout" 
            isCollapsed={sidebarCollapsed} 
            isActive={false} 
            action="logout"
          />
        </div>
      </aside>

      {mobileNavOpen && <div className="fixed inset-0 z-30 bg-black/50 md:hidden backdrop-blur-sm animate-fade-in" onClick={() => setMobileNavOpen(false)} />}

      <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border/40 bg-sidebar transition-all duration-300 ease-in-out dark:bg-sidebar", mobileNavOpen ? "translate-x-0" : "-translate-x-full", "md:hidden")}>
        <div className="flex h-16 items-center justify-between border-b border-border/40 px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary">DesignSystem</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMobileNav} className="text-muted-foreground">
            <X size={18} />
          </Button>
        </div>
        <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
          {navGroups.map(group => <NavGroup 
              key={group.title} 
              title={group.title} 
              isCollapsed={false}
              addTopMargin={["Structure", "Basics", "Interface", "Conversation Design"].includes(group.title)}
            >
              {group.items.map(item => <NavItem 
                key={item.to} 
                to={item.to} 
                icon={item.icon} 
                label={item.label} 
                isCollapsed={false} 
                isActive={location.pathname === item.to || location.pathname.startsWith(`${item.to}/`)} 
              />)}
            </NavGroup>)}
        </nav>
        
        {/* Footer with logout button */}
        <div className="mt-auto border-t border-border/40 p-2">
          <NavItem 
            to="/" 
            icon={LogOut} 
            label="Logout" 
            isCollapsed={false} 
            isActive={false} 
            action="logout"
          />
        </div>
      </aside>

      <div className={cn("flex-1 transition-all duration-300 ease-in-out", sidebarCollapsed ? "md:ml-16" : "md:ml-64")}>
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border/40 bg-background/80 px-4 backdrop-blur-sm">
          <Button variant="ghost" size="icon" onClick={toggleMobileNav} className="md:hidden">
            <Menu size={18} />
          </Button>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <main className="h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="container mx-auto p-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>;
};
export default AppShell;
