import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Bell,
  Plus,
  Pin,
  Calendar,
  Users,
  Eye,
  Edit,
  Trash2,
  Send,
  AlertCircle,
  Info,
  CheckCircle,
} from "lucide-react";

const Announcements = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "general",
    targetAudience: "all",
  });

  // Mock announcements data
  const announcements = [
    {
      id: 1,
      title: "Alumni Reunion 2024 - Save the Date!",
      content: "We're excited to announce our Annual Alumni Reunion scheduled for December 30th, 2024. Join us for a weekend of networking, memories, and celebration. Early bird registration opens next week!",
      type: "event",
      author: "Admin Team",
      createdAt: "2024-12-10",
      isPinned: true,
      views: 245,
      targetAudience: "all",
      responses: 23,
    },
    {
      id: 2,
      title: "New Mentorship Program Launch",
      content: "We're launching our enhanced mentorship program with AI-powered matching! Senior alumni can now mentor recent graduates more effectively. Sign up as a mentor or mentee today.",
      type: "program",
      author: "Career Services",
      createdAt: "2024-12-08",
      isPinned: true,
      views: 189,
      targetAudience: "all",
      responses: 45,
    },
    {
      id: 3,
      title: "Industry Insights: Tech Trends 2024",
      content: "Join our virtual panel discussion on emerging tech trends featuring alumni from Google, Microsoft, and startups. Learn about AI, cloud computing, and career opportunities.",
      type: "general",
      author: "Tech Committee",
      createdAt: "2024-12-07",
      isPinned: false,
      views: 156,
      targetAudience: "tech",
      responses: 12,
    },
    {
      id: 4,
      title: "Alumni Directory Updates",
      content: "Please update your profile information in the alumni directory. We're seeing great engagement with our new search and networking features!",
      type: "update",
      author: "IT Team",
      createdAt: "2024-12-05",
      isPinned: false,
      views: 98,
      targetAudience: "all",
      responses: 7,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "event":
        return Calendar;
      case "program":
        return Users;
      case "update":
        return Info;
      default:
        return Bell;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "event":
        return "bg-primary text-primary-foreground";
      case "program":
        return "bg-accent text-accent-foreground";
      case "update":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const handleCreateAnnouncement = () => {
    if (!newAnnouncement.title.trim() || !newAnnouncement.content.trim()) return;
    
    // Handle creating announcement
    console.log("Creating announcement:", newAnnouncement);
    setIsCreating(false);
    setNewAnnouncement({
      title: "",
      content: "",
      type: "general",
      targetAudience: "all",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <Bell className="w-8 h-8 mr-3 text-primary" />
            Announcements
          </h1>
          <p className="text-muted-foreground">Keep alumni informed about important updates and events</p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Announcement
        </Button>
      </div>

      {/* Create Announcement Modal */}
      {isCreating && (
        <Card className="alumni-shadow-professional border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Plus className="w-5 h-5 mr-2 text-primary" />
              Create New Announcement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Type</label>
                <Select value={newAnnouncement.type} onValueChange={(value) => 
                  setNewAnnouncement(prev => ({ ...prev, type: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="program">Program</SelectItem>
                    <SelectItem value="update">Update</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Target Audience</label>
                <Select value={newAnnouncement.targetAudience} onValueChange={(value) => 
                  setNewAnnouncement(prev => ({ ...prev, targetAudience: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Alumni</SelectItem>
                    <SelectItem value="tech">Tech Alumni</SelectItem>
                    <SelectItem value="recent">Recent Graduates</SelectItem>
                    <SelectItem value="seniors">Senior Alumni</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Title</label>
              <Input
                placeholder="Enter announcement title..."
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Content</label>
              <Textarea
                placeholder="Enter announcement content..."
                rows={4}
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement(prev => ({ ...prev, content: e.target.value }))}
              />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button onClick={handleCreateAnnouncement}>
                <Send className="w-4 h-4 mr-2" />
                Publish
              </Button>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Announcements</p>
                <p className="text-2xl font-bold">{announcements.length}</p>
              </div>
              <Bell className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pinned</p>
                <p className="text-2xl font-bold">{announcements.filter(a => a.isPinned).length}</p>
              </div>
              <Pin className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">{announcements.reduce((sum, a) => sum + a.views, 0)}</p>
              </div>
              <Eye className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Responses</p>
                <p className="text-2xl font-bold">{announcements.reduce((sum, a) => sum + a.responses, 0)}</p>
              </div>
              <Users className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((announcement) => {
          const TypeIcon = getTypeIcon(announcement.type);
          
          return (
            <Card key={announcement.id} className={`alumni-shadow-professional ${announcement.isPinned ? 'border-primary/30' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(announcement.type)}`}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                        {announcement.isPinned && (
                          <Pin className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>By {announcement.author}</span>
                        <span>{announcement.createdAt}</span>
                        <Badge variant="secondary" className="text-xs">
                          {announcement.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground mb-4">{announcement.content}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{announcement.views} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{announcement.responses} responses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>Target: {announcement.targetAudience}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">
                      <Pin className="w-4 h-4 mr-2" />
                      {announcement.isPinned ? 'Unpin' : 'Pin'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {announcements.length === 0 && (
        <Card className="py-12">
          <CardContent className="text-center">
            <Bell className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Announcements Yet</h3>
            <p className="text-muted-foreground mb-4">Create your first announcement to keep alumni informed.</p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Announcement
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Announcements;