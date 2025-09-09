import Navigation from "@/components/Layout/Navigation";
import AlumniDirectory from "@/components/Alumni/AlumniDirectory";
import AlumniMap from "@/components/Alumni/AlumniMap";
import GroupChats from "@/components/Chat/GroupChats";
import AIAssistant from "@/components/AI/AIAssistant";
import MentorshipHub from "@/components/Mentorship/MentorshipHub";
import Announcements from "@/components/Admin/Announcements";
import Internships from "@/components/Opportunities/Internships";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Users,
  Map,
  MessageSquare,
  BookOpen,
  Briefcase,
  Bell,
  Bot,
  TrendingUp,
  Globe,
  Calendar,
  Zap,
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("directory");

  // Stats data
  const stats = [
    { icon: Users, label: "Total Alumni", value: "2,450", change: "+12%" },
    { icon: Globe, label: "Countries", value: "45", change: "+3" },
    { icon: MessageSquare, label: "Active Chats", value: "156", change: "+8%" },
    { icon: Briefcase, label: "Job Openings", value: "23", change: "+5" },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "directory":
        return <AlumniDirectory />;
      case "map":
        return <AlumniMap />;
      case "chats":
        return <GroupChats />;
      case "mentorship":
        return <MentorshipHub />;
      case "internships":
        return <Internships />;
      case "announcements":
        return <Announcements />;
      case "ai":
        return <AIAssistant />;
      default:
        return <AlumniDirectory />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <div className="lg:pl-64">
        <div className="p-6">
          {/* Quick Stats - Only show on directory page */}
          {activeSection === "directory" && (
            <div className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="alumni-shadow-professional">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-xs text-success font-medium">{stat.change}</p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Hero Section */}
              <Card className="alumni-hero-gradient text-white mb-8">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                        Welcome to AlumniConnect
                      </h1>
                      <p className="text-lg opacity-90 mb-6 max-w-2xl">
                        Your comprehensive alumni management platform. Connect with fellow graduates, 
                        find mentors, discover opportunities, and stay updated with your alma mater.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button 
                          variant="secondary" 
                          onClick={() => setActiveSection("map")}
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Map className="w-4 h-4 mr-2" />
                          Explore Alumni Map
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setActiveSection("ai")}
                          className="border-white/30 text-white hover:bg-white/10"
                        >
                          <Bot className="w-4 h-4 mr-2" />
                          Try AI Assistant
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">2.4K+</div>
                          <div className="text-sm opacity-75">Alumni</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">45</div>
                          <div className="text-sm opacity-75">Countries</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">156</div>
                          <div className="text-sm opacity-75">Active Chats</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">23</div>
                          <div className="text-sm opacity-75">Opportunities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card 
                  className="cursor-pointer hover:shadow-lg alumni-transition"
                  onClick={() => setActiveSection("chats")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Group Chats</h3>
                        <p className="text-sm text-muted-foreground">Join batch conversations</p>
                        <Badge variant="secondary" className="mt-1">3 new messages</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg alumni-transition"
                  onClick={() => setActiveSection("mentorship")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Mentorship</h3>
                        <p className="text-sm text-muted-foreground">Connect with mentors</p>
                        <Badge variant="secondary" className="mt-1">Available now</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg alumni-transition"
                  onClick={() => setActiveSection("internships")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Internships</h3>
                        <p className="text-sm text-muted-foreground">Discover opportunities</p>
                        <Badge variant="secondary" className="mt-1">5 new postings</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Section Navigation - Mobile */}
          <div className="lg:hidden mb-6">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {[
                { key: "directory", label: "Directory", icon: Users },
                { key: "map", label: "Map", icon: Map },
                { key: "chats", label: "Chats", icon: MessageSquare },
                { key: "mentorship", label: "Mentorship", icon: BookOpen },
                { key: "internships", label: "Jobs", icon: Briefcase },
                { key: "announcements", label: "News", icon: Bell },
                { key: "ai", label: "AI", icon: Bot },
              ].map((section) => (
                <Button
                  key={section.key}
                  variant={activeSection === section.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveSection(section.key)}
                  className="whitespace-nowrap"
                >
                  <section.icon className="w-4 h-4 mr-2" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Section Content */}
          <div className="fade-in">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
