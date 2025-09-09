import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Map,
  MessageSquare,
  Search,
  Bell,
  Settings,
  BookOpen,
  Briefcase,
  Calendar,
  Menu,
  X,
  Bot,
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { icon: Users, label: "Alumni Directory", active: true },
    { icon: Map, label: "Alumni Map", active: false },
    { icon: MessageSquare, label: "Group Chats", active: false, badge: "3" },
    { icon: BookOpen, label: "Mentorship", active: false },
    { icon: Briefcase, label: "Internships", active: false, badge: "5" },
    { icon: Calendar, label: "Events", active: false },
    { icon: Bell, label: "Announcements", active: false, badge: "2" },
    { icon: Bot, label: "AI Assistant", active: false },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-50 lg:bg-white lg:border-r lg:border-border">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 alumni-hero-gradient">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-semibold text-white">AlumniConnect</span>
            </div>
          </div>

          {/* User Profile */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-primary text-primary-foreground">AD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Admin Dashboard</p>
                <p className="text-xs text-muted-foreground truncate">admin@university.edu</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-4 py-6 space-y-1">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start h-11 ${
                  item.active ? "alumni-gradient text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="ml-auto bg-accent text-accent-foreground">
                    {item.badge}
                  </Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Settings */}
          <div className="p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 alumni-gradient rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold">AlumniConnect</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative flex flex-col w-64 h-full bg-white border-r border-border">
              <div className="flex items-center h-16 px-6 alumni-hero-gradient">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-white">AlumniConnect</span>
                </div>
              </div>
              
              <div className="flex-1 px-4 py-6 space-y-1">
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-start h-11 ${
                      item.active ? "alumni-gradient text-white" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;