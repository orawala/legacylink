import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Briefcase,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Users,
  Filter,
  Search,
  Bookmark,
  ExternalLink,
  Building,
  Star,
  Bell,
} from "lucide-react";

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // Mock internship data
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      location: "Bangalore, India",
      type: "Full-time",
      duration: "3 months",
      stipend: "₹50,000/month",
      postedBy: "Rajesh Kumar",
      postedDate: "2024-12-10",
      deadline: "2024-12-25",
      applicants: 145,
      description: "Join our team to work on cutting-edge technologies including AI, machine learning, and distributed systems. You'll collaborate with senior engineers on real projects.",
      requirements: ["Computer Science/IT background", "Proficiency in Python/Java", "Understanding of algorithms"],
      companyLogo: "",
      isBookmarked: false,
      tags: ["Tech", "AI/ML", "Backend"],
    },
    {
      id: 2,
      title: "Product Management Intern",
      company: "Microsoft",
      location: "Hyderabad, India",
      type: "Full-time",
      duration: "6 months",
      stipend: "₹45,000/month",
      postedBy: "Priya Sharma",
      postedDate: "2024-12-08",
      deadline: "2024-12-30",
      applicants: 89,
      description: "Work with product teams to define roadmaps, analyze user feedback, and drive feature development for Microsoft Office products.",
      requirements: ["MBA/Engineering background", "Analytical skills", "User research experience"],
      companyLogo: "",
      isBookmarked: true,
      tags: ["Product", "Strategy", "Analysis"],
    },
    {
      id: 3,
      title: "UX Design Intern",
      company: "Adobe",
      location: "Remote",
      type: "Part-time",
      duration: "4 months",
      stipend: "₹35,000/month",
      postedBy: "Sneha Reddy",
      postedDate: "2024-12-07",
      deadline: "2024-12-20",
      applicants: 67,
      description: "Create user-centered designs for Adobe Creative Cloud. Work on wireframes, prototypes, and user research studies.",
      requirements: ["Design background", "Figma/Sketch proficiency", "Portfolio required"],
      companyLogo: "",
      isBookmarked: false,
      tags: ["Design", "UI/UX", "Creative"],
    },
    {
      id: 4,
      title: "Data Science Intern",
      company: "Netflix",
      location: "Mumbai, India",
      type: "Full-time",
      duration: "5 months",
      stipend: "₹60,000/month",
      postedBy: "Amit Patel",
      postedDate: "2024-12-05",
      deadline: "2024-12-18",
      applicants: 203,
      description: "Analyze user behavior data, build recommendation models, and work on personalization algorithms for Netflix's recommendation engine.",
      requirements: ["Statistics/CS background", "Python/R proficiency", "ML experience"],
      companyLogo: "",
      isBookmarked: true,
      tags: ["Data Science", "ML", "Analytics"],
    },
  ];

  const myApplications = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Google",
      status: "Under Review",
      appliedDate: "2024-12-08",
      statusColor: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Product Management Intern",
      company: "Microsoft",
      status: "Interview Scheduled",
      appliedDate: "2024-12-06",
      statusColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Netflix",
      status: "Rejected",
      appliedDate: "2024-12-04",
      statusColor: "bg-red-500",
    },
  ];

  const filteredInternships = internships.filter((internship) => {
    const matchesSearch = internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         internship.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLocation = !selectedLocation || internship.location.includes(selectedLocation);
    const matchesType = !selectedType || internship.type === selectedType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  const handleBookmark = (id: number) => {
    // Handle bookmark toggle
    console.log("Toggling bookmark for internship:", id);
  };

  const handleApply = (id: number) => {
    // Handle application
    console.log("Applying for internship:", id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-primary" />
            Internship Opportunities
          </h1>
          <p className="text-muted-foreground">Discover internships shared by our alumni network</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Bell className="w-4 h-4 mr-2" />
            Set Alerts
          </Button>
          <Button>
            <Users className="w-4 h-4 mr-2" />
            Post Internship
          </Button>
        </div>
      </div>

      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse">Browse Internships</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          {/* Search and Filters */}
          <Card className="alumni-shadow-professional">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Search className="w-5 h-5 mr-2 text-primary" />
                Search Internships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by role, company, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {filteredInternships.length} internships found
                </p>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedLocation("");
                    setSelectedType("");
                  }}
                >
                  Clear All
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Internships Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredInternships.map((internship) => (
              <Card key={internship.id} className="alumni-shadow-professional hover:shadow-lg alumni-transition">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={internship.companyLogo} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {internship.company[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-foreground">{internship.title}</h3>
                        <p className="text-muted-foreground">{internship.company}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBookmark(internship.id)}
                    >
                      <Bookmark className={`w-4 h-4 ${internship.isBookmarked ? 'fill-current text-primary' : ''}`} />
                    </Button>
                  </div>

                  <p className="text-sm text-foreground mb-4 line-clamp-3">{internship.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {internship.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {internship.duration} • {internship.type}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {internship.stipend}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Deadline: {internship.deadline}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      <p>Posted by {internship.postedBy}</p>
                      <p>{internship.applicants} applicants</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                      <Button size="sm" onClick={() => handleApply(internship.id)}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <Card className="py-12">
              <CardContent className="text-center">
                <Briefcase className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Internships Found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria or check back later for new opportunities.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card className="alumni-shadow-professional">
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {myApplications.map((application) => (
                <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted text-muted-foreground">
                        {application.company[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-foreground">{application.title}</h3>
                      <p className="text-sm text-muted-foreground">{application.company}</p>
                      <p className="text-xs text-muted-foreground">Applied on {application.appliedDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={`${application.statusColor} text-white`}>
                      {application.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}

              {myApplications.length === 0 && (
                <div className="text-center py-8">
                  <Briefcase className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Applications Yet</h3>
                  <p className="text-muted-foreground">Start browsing internships to submit your first application.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Internships;