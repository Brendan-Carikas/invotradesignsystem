import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import invotraIcon from "@/assets/images/invotra-icon.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Menu, X, LayoutGrid, LayoutPanelTop, Layout, Package, AlertCircle, Heading, PanelTop, Grid, LineChart, FormInput, Bot, LogOut, FileText, Book, Library, GitBranch, BarChart3, FileBarChart } from 'lucide-react';
import { useAuth } from "../../contexts/AuthContext";

// Import permission types
type NavSection = 'overview' | 'structure' | 'basics' | 'interface' | 'conversation' | 'knowledge';
type UserRole = 'admin' | 'conversational' | 'standard' | 'demo';

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
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = (e: React.MouseEvent) => {
    if (action === 'logout') {
      e.preventDefault();
      logout().then(() => {
        navigate('/');
      });
    }
  };

  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
      onClick={handleClick}
    >
      <Icon size={18} />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
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
  return (
    <div className={cn("space-y-1", addTopMargin && "mt-6")}>
      {!isCollapsed && <h4 className="px-3 text-xs font-semibold text-muted-foreground mb-1 mt-0">{title}</h4>}
      {children}
    </div>
  );
};

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const { userRole } = useAuth();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  // Function to determine if a navigation section should be visible based on user role
  const shouldShowNavSection = (section: NavSection): boolean => {
    // For chat@invotra.com users (conversational role), only show conversation design and knowledge base
    if (userRole === 'conversational') {
      return section === 'conversation' || section === 'knowledge' || section === 'overview';
    }
    // For demo@invotra.com users (demo role), hide conversation design and knowledge base
    if (userRole === 'demo') {
      return section !== 'conversation' && section !== 'knowledge';
    }
    // Admin users can see everything
    if (userRole === 'admin') {
      return true;
    }
    // Standard users see everything except restricted sections
    return true;
  };

  // Create different navigation groups based on user role
  const getNavGroups = () => {
    // Special navigation for conversational role (chat@invotra.com)
    if (userRole === 'conversational') {
      return [
        {
          title: "Overview",
          section: 'overview' as NavSection,
          items: [{
            to: "/conversational",
            icon: LayoutGrid,
            label: "Overview"
          }]
        }, 
        {
          title: "Conversation Design",
          section: 'conversation' as NavSection,
          items: [{
            to: "/components/chatbot",
            icon: Bot,
            label: "Chatbot"
          }, {
            to: "/flows/conversational-flows",
            icon: GitBranch,
            label: "Flows"
          }]
        }, 
        {
          title: "Knowledge Base",
          section: 'knowledge' as NavSection,
          items: [{
            to: "/knowledge/conversational-design",
            icon: FileText,
            label: "Conversational Design"
          }, {
            to: "/knowledge/playbooks",
            icon: Book,
            label: "Playbooks"
          }, {
            to: "/knowledge/resources",
            icon: Library,
            label: "Resources"
          }]
        },
        {
          title: "Analytics and reports",
          section: 'knowledge' as NavSection,
          items: [{
            to: "/knowledge/analytics",
            icon: BarChart3,
            label: "Analytics"
          }, {
            to: "/knowledge/reports",
            icon: FileBarChart,
            label: "Reports"
          }]
        }
      ];
    }
    
    // Standard navigation for other users
    return [
      {
        title: "Overview",
        section: 'overview' as NavSection,
        items: [{
          to: "/home",
          icon: LayoutGrid,
          label: "Overview"
        }]
      }, 
      {
        title: "Structure",
        section: 'structure' as NavSection,
        items: [{
          to: "/components/application-shells",
          icon: LayoutPanelTop,
          label: "Application Shells"
        }, {
          to: "/components/layout/shells",
          icon: Layout,
          label: "Content Shells"
        }]
      }, 
      {
        title: "Basics",
        section: 'basics' as NavSection,
        items: [{
          to: "/components/foundation",
          icon: Package,
          label: "Foundation"
        }, {
          to: "/components/iconography",
          icon: AlertCircle,
          label: "Iconography"
        }]
      }, 
      {
        title: "Interface",
        section: 'interface' as NavSection,
        items: [{
          to: "/components/typography",
          icon: Heading,
          label: "Typography"
        }, {
          to: "/components/panels",
          icon: PanelTop,
          label: "Panels"
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
      }, 
      {
        title: "Conversation Design",
        section: 'conversation' as NavSection,
        items: [{
          to: "/components/chatbot",
          icon: Bot,
          label: "Chatbot"
        }, {
          to: "/flows/conversational-flows",
          icon: GitBranch,
          label: "Flows"
        }]
      }, 
      {
        title: "Knowledge Base",
        section: 'knowledge' as NavSection,
        items: [{
          to: "/knowledge/conversational-design",
          icon: FileText,
          label: "Conversational Design"
        }, {
          to: "/knowledge/playbooks",
          icon: Book,
          label: "Playbooks"
        }, {
          to: "/knowledge/resources",
          icon: Library,
          label: "Resources"
        }]
      },
      {
        title: "Analytics and reports",
        section: 'knowledge' as NavSection,
        items: [{
          to: "/knowledge/analytics",
          icon: BarChart3,
          label: "Analytics"
        }, {
          to: "/knowledge/reports",
          icon: FileBarChart,
          label: "Reports"
        }]
      }
    ];
  };

  const navigationGroups = getNavGroups();
  
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <aside className={cn("fixed inset-y-0 left-0 z-20 flex flex-col border-r border-border/40 bg-sidebar transition-all duration-300 ease-in-out dark:bg-sidebar", sidebarCollapsed ? "w-16" : "w-64", "hidden md:flex")}>
        <div className="flex h-16 items-center justify-between gap-2 border-b border-border/40 px-4">
          {!sidebarCollapsed && <Link to="/" className="flex items-center gap-2 animate-fade-in">
              <img src={invotraIcon} alt="Invotra Icon" className="h-5 w-5" />
              <span className="text-lg font-semibold text-primary">
                {userRole === 'conversational' ? 'CxD' : 'DesignSystem'}
              </span>
            </Link>}
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto text-muted-foreground">
            <Menu size={18} />
          </Button>
        </div>
        <nav className="flex-1 space-y- p-2 overflow-y-auto">
          {navigationGroups
            .filter(group => shouldShowNavSection(group.section)) // Filter groups based on user role
            .map(group => <NavGroup 
              key={group.title} 
              title={group.title} 
              isCollapsed={sidebarCollapsed}
              addTopMargin={["Structure", "Basics", "Interface", "Conversation Design", "Knowledge Base", "Analytics and reports"].includes(group.title)}
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
          {navigationGroups.map(group => <NavGroup 
              key={group.title} 
              title={group.title} 
              isCollapsed={false}
              addTopMargin={["Structure", "Basics", "Interface", "Conversation Design", "Knowledge Base", "Analytics and reports"].includes(group.title)}
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
    </div>
  );
}
