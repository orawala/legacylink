import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  MessageCircle,
  Users,
} from "lucide-react";

const AlumniDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Mock alumni data
  const alumniData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@tech.com",
      phone: "+91 98765 43210",
      batch: "2020",
      degree: "B.Tech Computer Science",
      currentRole: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      avatar: "",
      skills: ["React", "Node.js", "Python"],
      available: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@startup.com",
      phone: "+91 87654 32109",
      batch: "2019",
      degree: "B.Tech Electronics",
      currentRole: "Product Manager",
      company: "Microsoft",
      location: "Hyderabad, India",
      avatar: "",
      skills: ["Product Strategy", "Agile", "Analytics"],
      available: true,
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@finance.com",
      phone: "+1 234 567 8900",
      batch: "2018",
      degree: "MBA Finance",
      currentRole: "Investment Analyst",
      company: "Goldman Sachs",
      location: "New York, USA",
      avatar: "",
      skills: ["Financial Analysis", "Risk Management", "Excel"],
      available: false,
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@design.com",
      phone: "+91 76543 21098",
      batch: "2021",
      degree: "B.Des UI/UX",
      currentRole: "UX Designer",
      company: "Adobe",
      location: "Pune, India",
      avatar: "",
      skills: ["Figma", "User Research", "Prototyping"],
      available: true,
    },
  ];

  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         alumni.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = !selectedYear || alumni.batch === selectedYear;
    const matchesCompany = !selectedCompany || alumni.company === selectedCompany;
    const matchesLocation = !selectedLocation || alumni.location.includes(selectedLocation);
    
    return matchesSearch && matchesYear && matchesCompany && matchesLocation;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alumni Directory</h1>
          <p className="text-muted-foreground">Connect with fellow alumni worldwide</p>
        </div>
        <Badge variant="secondary" className="w-fit">
          <Users className="w-4 h-4 mr-2" />
          {filteredAlumni.length} Alumni Found
        </Badge>
      </div>

      {/* Search and Filters */}
      <Card className="alumni-shadow-professional">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Search className="w-5 h-5 mr-2 text-primary" />
            Search & Filter Alumni
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger>
                <SelectValue placeholder="Current Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                <SelectItem value="Google">Google</SelectItem>
                <SelectItem value="Microsoft">Microsoft</SelectItem>
                <SelectItem value="Goldman Sachs">Goldman Sachs</SelectItem>
                <SelectItem value="Adobe">Adobe</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
                <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                <SelectItem value="Pune">Pune</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("");
                setSelectedCompany("");
                setSelectedLocation("");
              }}
            >
              Clear All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumni) => (
          <Card key={alumni.id} className="alumni-shadow-professional hover:shadow-lg alumni-transition">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={alumni.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground truncate">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{alumni.currentRole}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${alumni.available ? 'bg-success' : 'bg-muted-foreground'}`} />
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {alumni.company}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {alumni.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Class of {alumni.batch}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {alumni.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex space-x-2">
                <Button size="sm" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Connect
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAlumni.length === 0 && (
        <Card className="py-12">
          <CardContent className="text-center">
            <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Alumni Found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AlumniDirectory;