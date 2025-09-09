import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Users,
  Video,
  MessageSquare,
  Clock,
  Star,
  Calendar,
  Phone,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  MoreVertical,
} from "lucide-react";

const MentorshipHub = () => {
  const [activeCall, setActiveCall] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // Mock mentorship data
  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Senior VP Engineering",
      company: "Microsoft",
      expertise: ["System Design", "Leadership", "Career Growth"],
      rating: 4.9,
      sessions: 145,
      image: "",
      available: true,
      nextSlot: "Today 3:00 PM",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Head of Product",
      company: "Uber",
      expertise: ["Product Strategy", "User Research", "Analytics"],
      rating: 4.8,
      sessions: 98,
      image: "",
      available: true,
      nextSlot: "Tomorrow 10:00 AM",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Data Science Director",
      company: "Netflix",
      expertise: ["Machine Learning", "Data Analytics", "Team Building"],
      rating: 4.9,
      sessions: 76,
      image: "",
      available: false,
      nextSlot: "Dec 20, 2:00 PM",
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      mentor: "Dr. Sarah Chen",
      topic: "System Design Deep Dive",
      time: "Today, 3:00 PM",
      duration: "60 min",
      type: "video",
    },
    {
      id: 2,
      mentor: "Amit Singh",
      topic: "Career Transition Discussion",
      time: "Tomorrow, 10:00 AM",
      duration: "45 min",
      type: "audio",
    },
  ];

  const pastSessions = [
    {
      id: 1,
      mentor: "Rajesh Kumar",
      topic: "Product Management Fundamentals",
      date: "Dec 10, 2024",
      rating: 5,
      notes: "Great session on product strategy and roadmap planning.",
    },
    {
      id: 2,
      mentor: "Lisa Wang",
      topic: "Startup Fundraising 101",
      date: "Dec 8, 2024",
      rating: 5,
      notes: "Excellent insights into VC landscape and pitch preparation.",
    },
  ];

  const handleStartCall = (mentorId: string) => {
    setActiveCall(mentorId);
  };

  const handleEndCall = () => {
    setActiveCall(null);
    setIsMuted(false);
    setIsVideoOn(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-primary" />
            Mentorship Hub
          </h1>
          <p className="text-muted-foreground">Connect with experienced alumni for guidance and support</p>
        </div>
        <Button>
          <Users className="w-4 h-4 mr-2" />
          Become a Mentor
        </Button>
      </div>

      {/* Active Call Modal */}
      {activeCall && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center">
          <Card className="w-full max-w-4xl h-[600px] bg-black text-white border-gray-800">
            <CardContent className="p-0 h-full flex flex-col">
              {/* Video Area */}
              <div className="flex-1 relative bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-4xl">
                      SC
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                  <p className="text-gray-400">Senior VP Engineering at Microsoft</p>
                  <Badge variant="secondary" className="mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    15:42
                  </Badge>
                </div>

                {/* Self Video */}
                <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border border-gray-600 flex items-center justify-center">
                  {isVideoOn ? (
                    <div className="text-center">
                      <Avatar className="w-16 h-16 mx-auto mb-2">
                        <AvatarFallback className="bg-muted text-muted-foreground">
                          You
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-xs text-gray-400">You</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <CameraOff className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-xs text-gray-400">Camera Off</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Call Controls */}
              <div className="p-6 bg-gray-900 border-t border-gray-800">
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant={isMuted ? "destructive" : "secondary"}
                    size="lg"
                    className="rounded-full w-12 h-12"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    variant="destructive"
                    size="lg"
                    className="rounded-full w-14 h-14"
                    onClick={handleEndCall}
                  >
                    <Phone className="w-6 h-6" />
                  </Button>
                  
                  <Button
                    variant={isVideoOn ? "secondary" : "destructive"}
                    size="lg"
                    className="rounded-full w-12 h-12"
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Camera className="w-5 h-5" /> : <CameraOff className="w-5 h-5" />}
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-full w-12 h-12"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Tabs defaultValue="mentors" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
          <TabsTrigger value="sessions">My Sessions</TabsTrigger>
          <TabsTrigger value="history">Session History</TabsTrigger>
        </TabsList>

        <TabsContent value="mentors" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="alumni-shadow-professional">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={mentor.image} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {mentor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        mentor.available ? 'bg-success' : 'bg-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      <p className="text-sm text-muted-foreground">{mentor.company}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {mentor.rating}
                      </div>
                      <div>{mentor.sessions} sessions</div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Expertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>Next available:</span>
                        <span className="font-medium">{mentor.nextSlot}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          disabled={!mentor.available}
                          onClick={() => handleStartCall(mentor.id.toString())}
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Video Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card className="alumni-shadow-professional">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      session.type === 'video' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                    }`}>
                      {session.type === 'video' ? <Video className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{session.topic}</h3>
                      <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span>{session.time}</span>
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Join
                    </Button>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="alumni-shadow-professional">
            <CardHeader>
              <CardTitle>Past Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pastSessions.map((session) => (
                <div key={session.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{session.topic}</h3>
                      <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                      <p className="text-xs text-muted-foreground mt-1">{session.date}</p>
                      <p className="text-sm text-foreground mt-2">{session.notes}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(session.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentorshipHub;