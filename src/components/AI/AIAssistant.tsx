import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bot,
  Send,
  Mic,
  MicOff,
  User,
  Sparkles,
  MessageSquare,
  BookOpen,
  Briefcase,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Assistant for AlumniConnect. I can help you with alumni searches, mentorship matching, career guidance, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Quick action suggestions
  const quickActions = [
    {
      icon: Users,
      label: "Find Alumni",
      description: "Search for alumni by company, role, or location",
      prompt: "Help me find alumni working at Google in software engineering roles",
    },
    {
      icon: BookOpen,
      label: "Mentorship",
      description: "Get matched with potential mentors",
      prompt: "I'm looking for a mentor in product management. Can you help?",
    },
    {
      icon: Briefcase,
      label: "Career Advice",
      description: "Get career guidance and tips",
      prompt: "What career paths are available for computer science graduates?",
    },
    {
      icon: Calendar,
      label: "Events",
      description: "Find upcoming alumni events",
      prompt: "What alumni events are happening this month?",
    },
    {
      icon: TrendingUp,
      label: "Industry Insights",
      description: "Get insights about industry trends",
      prompt: "What are the latest trends in the tech industry for 2024?",
    },
  ];

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateBotResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("find") && message.includes("alumni")) {
      return "I can help you find alumni! Based on your query, I found 23 alumni working at Google in software engineering roles. Here are the top matches:\n\n• Rajesh Kumar - Senior Software Engineer at Google (Bangalore)\n• Priya Patel - Software Engineer II at Google (Mountain View)\n• Amit Singh - Staff Software Engineer at Google (Hyderabad)\n\nWould you like me to help you connect with any of them?";
    }
    
    if (message.includes("mentor")) {
      return "Great choice! Mentorship is valuable for career growth. I found 12 experienced product managers in our alumni network who are available for mentoring:\n\n• Sarah Chen - Senior PM at Microsoft (5+ years experience)\n• David Kumar - VP Product at Uber (8+ years experience)\n• Lisa Patel - Head of Product at Swiggy (6+ years experience)\n\nI can arrange an introduction or help you join our Product Management mentorship group. What would you prefer?";
    }
    
    if (message.includes("career") || message.includes("advice")) {
      return "Here are some popular career paths for computer science graduates based on our alumni data:\n\n🚀 **High Growth Areas:**\n• Software Engineering (45% of alumni)\n• Product Management (18% of alumni)\n• Data Science/ML (15% of alumni)\n• Entrepreneurship (12% of alumni)\n• Consulting (10% of alumni)\n\n💡 **Trending Skills:**\n• Cloud Computing (AWS, Azure, GCP)\n• Machine Learning & AI\n• Full-Stack Development\n• DevOps & System Design\n\nWould you like specific guidance for any of these paths?";
    }
    
    if (message.includes("events")) {
      return "Here are the upcoming alumni events this month:\n\n📅 **This Week:**\n• Tech Talk: AI in Finance - Dec 15, 7 PM (Virtual)\n• Bangalore Alumni Meetup - Dec 17, 6 PM (UB City Mall)\n\n📅 **Next Week:**\n• Career Panel: Startup vs Corporate - Dec 22, 5 PM (Virtual)\n• Year-end Alumni Gala - Dec 30, 7 PM (Hotel Taj)\n\n🎯 **Interest Groups:**\n• Women in Tech Monthly - Dec 20, 4 PM\n• Entrepreneurship Circle - Dec 25, 3 PM\n\nWould you like me to register you for any of these events?";
    }
    
    if (message.includes("trend") || message.includes("industry")) {
      return "Here are the key tech industry trends for 2024 based on our alumni insights:\n\n🔥 **Hot Technologies:**\n• Generative AI & LLMs (78% growth in job postings)\n• Cloud-Native Development (65% growth)\n• Cybersecurity (52% growth)\n• Blockchain & Web3 (45% growth)\n\n💼 **In-Demand Roles:**\n• AI/ML Engineers\n• DevSecOps Engineers\n• Product Managers (AI/ML focus)\n• Solutions Architects\n\n🌟 **Salary Trends:**\n• AI/ML roles: ₹25-45 LPA average\n• Senior SDE: ₹20-35 LPA average\n• Product Manager: ₹18-40 LPA average\n\nWant me to connect you with alumni working in any of these areas?";
    }
    
    return "Thank you for your question! I'm here to help with:\n\n• Finding and connecting with alumni\n• Mentorship opportunities\n• Career guidance and industry insights\n• Event recommendations\n• Job and internship opportunities\n• University updates and news\n\nCould you be more specific about what you'd like help with? I'm designed to make your alumni network experience more valuable!";
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real app, this would integrate with speech recognition API
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputMessage("Help me find alumni working in data science");
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <Bot className="w-8 h-8 mr-3 text-primary" />
            AI Assistant
          </h1>
          <p className="text-muted-foreground">Your intelligent alumni network companion</p>
        </div>
        <Badge variant="secondary" className="w-fit">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Powered
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Actions */}
        <Card className="alumni-shadow-professional">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-3 text-left"
                onClick={() => handleSendMessage(action.prompt)}
              >
                <div className="flex items-start space-x-3">
                  <action.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{action.label}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-3 alumni-shadow-professional">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Bot className="w-6 h-6 mr-2 text-primary" />
                Chat with AI Assistant
              </CardTitle>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Online</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Messages */}
            <ScrollArea className="h-96 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`flex space-x-3 max-w-[80%] ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isBot
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {message.isBot ? (
                          <Bot className="w-4 h-4" />
                        ) : (
                          <User className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`p-3 rounded-lg ${
                          message.isBot
                            ? "bg-muted text-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex space-x-3 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Ask me anything about alumni, careers, or events..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  variant={isListening ? "default" : "outline"}
                  size="sm"
                  onClick={toggleListening}
                  className={isListening ? "animate-pulse" : ""}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Button 
                  onClick={() => handleSendMessage()} 
                  disabled={!inputMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {isListening && (
                <div className="mt-2 text-center">
                  <Badge variant="secondary" className="animate-pulse">
                    <Mic className="w-3 h-3 mr-1" />
                    Listening...
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;