import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageSquare,
  Users,
  Send,
  Mic,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  UserPlus,
  Search,
} from "lucide-react";

const GroupChats = () => {
  const [selectedChat, setSelectedChat] = useState("batch-2020");
  const [newMessage, setNewMessage] = useState("");

  // Mock chat groups
  const chatGroups = [
    {
      id: "batch-2020",
      name: "Batch 2020",
      members: 45,
      lastMessage: "Hey everyone! Don't forget about the reunion next month!",
      lastTime: "2 min ago",
      unread: 3,
      avatar: "",
      online: 12,
    },
    {
      id: "cs-dept",
      name: "Computer Science Alumni",
      members: 128,
      lastMessage: "Anyone looking for React developers? We're hiring!",
      lastTime: "15 min ago",
      unread: 0,
      avatar: "",
      online: 23,
    },
    {
      id: "bangalore-alumni",
      name: "Bangalore Alumni",
      members: 67,
      lastMessage: "Coffee meetup this weekend at UB City?",
      lastTime: "1 hour ago",
      unread: 1,
      avatar: "",
      online: 8,
    },
    {
      id: "tech-mentors",
      name: "Tech Mentors",
      members: 34,
      lastMessage: "Great session on system design today!",
      lastTime: "3 hours ago",
      unread: 0,
      avatar: "",
      online: 5,
    },
  ];

  // Mock messages for selected chat
  const messages = [
    {
      id: 1,
      sender: "Rajesh Kumar",
      message: "Hey everyone! Hope you're all doing well. Just wanted to share that I got promoted to Senior Engineer at Google!",
      time: "10:30 AM",
      avatar: "",
      isOwn: false,
    },
    {
      id: 2,
      sender: "Priya Sharma",
      message: "Congratulations Rajesh! 🎉 That's amazing news!",
      time: "10:32 AM",
      avatar: "",
      isOwn: false,
    },
    {
      id: 3,
      sender: "You",
      message: "Congrats! We should celebrate when you're back in town.",
      time: "10:35 AM",
      avatar: "",
      isOwn: true,
    },
    {
      id: 4,
      sender: "Amit Patel",
      message: "By the way, don't forget about our alumni reunion next month. I'll share the details soon!",
      time: "10:40 AM",
      avatar: "",
      isOwn: false,
    },
  ];

  const selectedGroup = chatGroups.find(group => group.id === selectedChat);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // Handle sending message
    setNewMessage("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Group Chats</h1>
          <p className="text-muted-foreground">Stay connected with your batch and interest groups</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Create Group
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat List */}
        <Card className="alumni-shadow-professional">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Groups
              </span>
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96">
              {chatGroups.map((group) => (
                <div
                  key={group.id}
                  className={`p-4 border-b cursor-pointer alumni-transition ${
                    selectedChat === group.id
                      ? "bg-primary/10 border-l-4 border-l-primary"
                      : "hover:bg-muted/50"
                  }`}
                  onClick={() => setSelectedChat(group.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={group.avatar} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {group.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{group.online}</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-foreground truncate">{group.name}</h3>
                        <div className="flex items-center space-x-2">
                          {group.unread > 0 && (
                            <Badge variant="default" className="bg-primary text-primary-foreground">
                              {group.unread}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">{group.lastTime}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-1">{group.lastMessage}</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <Users className="w-3 h-3 mr-1" />
                        {group.members} members
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 alumni-shadow-professional">
          {selectedGroup ? (
            <>
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={selectedGroup.avatar} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {selectedGroup.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{selectedGroup.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedGroup.online} online • {selectedGroup.members} members
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-0">
                <ScrollArea className="h-96 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex space-x-2 max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}>
                          {!message.isOwn && (
                            <Avatar className="w-8 h-8">
                              <AvatarImage src={message.avatar} />
                              <AvatarFallback className="text-xs bg-muted text-muted-foreground">
                                {message.sender.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            {!message.isOwn && (
                              <p className="text-xs text-muted-foreground mb-1">{message.sender}</p>
                            )}
                            <div
                              className={`chat-bubble ${
                                message.isOwn ? "chat-bubble-sent" : "chat-bubble-received"
                              }`}
                            >
                              <p className="text-sm">{message.message}</p>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Input
                      placeholder={`Message ${selectedGroup.name}...`}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button variant="ghost" size="sm">
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-96">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Select a Chat</h3>
                <p className="text-muted-foreground">Choose a group chat to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default GroupChats;