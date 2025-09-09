import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Globe,
  MapPin,
  Users,
  Zap,
  Filter,
  Search,
} from "lucide-react";

const AlumniMap = () => {
  const [mapMode, setMapMode] = useState<"india" | "world">("india");
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Mock location data
  const locationData = {
    india: [
      { city: "Bangalore", count: 245, coords: { lat: 12.9716, lng: 77.5946 } },
      { city: "Mumbai", count: 189, coords: { lat: 19.0760, lng: 72.8777 } },
      { city: "Delhi", count: 156, coords: { lat: 28.7041, lng: 77.1025 } },
      { city: "Hyderabad", count: 134, coords: { lat: 17.3850, lng: 78.4867 } },
      { city: "Chennai", count: 98, coords: { lat: 13.0827, lng: 80.2707 } },
      { city: "Pune", count: 87, coords: { lat: 18.5204, lng: 73.8567 } },
    ],
    world: [
      { city: "San Francisco, USA", count: 78, coords: { lat: 37.7749, lng: -122.4194 } },
      { city: "London, UK", count: 45, coords: { lat: 51.5074, lng: -0.1278 } },
      { city: "Singapore", count: 34, coords: { lat: 1.3521, lng: 103.8198 } },
      { city: "Toronto, Canada", count: 29, coords: { lat: 43.6532, lng: -79.3832 } },
      { city: "Dubai, UAE", count: 23, coords: { lat: 25.2048, lng: 55.2708 } },
      { city: "Sydney, Australia", count: 18, coords: { lat: -33.8688, lng: 151.2093 } },
    ],
  };

  const currentLocations = locationData[mapMode];
  const totalAlumni = currentLocations.reduce((sum, location) => sum + location.count, 0);

  // Mock alumni for selected location
  const getAlumniForLocation = (city: string) => [
    { name: "Rajesh Kumar", role: "Software Engineer", company: "Google" },
    { name: "Priya Sharma", role: "Product Manager", company: "Microsoft" },
    { name: "Amit Patel", role: "Data Scientist", company: "Amazon" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alumni Map</h1>
          <p className="text-muted-foreground">Discover where our alumni are making their mark</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={mapMode === "india" ? "default" : "outline"}
            onClick={() => setMapMode("india")}
            size="sm"
          >
            <MapPin className="w-4 h-4 mr-2" />
            India
          </Button>
          <Button
            variant={mapMode === "world" ? "default" : "outline"}
            onClick={() => setMapMode("world")}
            size="sm"
          >
            <Globe className="w-4 h-4 mr-2" />
            World
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Alumni</p>
                <p className="text-2xl font-bold">{totalAlumni}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cities</p>
                <p className="text-2xl font-bold">{currentLocations.length}</p>
              </div>
              <MapPin className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold">
                  {Math.floor(totalAlumni * 0.15)}
                  <span className="text-sm font-normal text-success ml-1">online</span>
                </p>
              </div>
              <Zap className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Area */}
        <Card className="lg:col-span-2 alumni-shadow-professional">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                {mapMode === "india" ? <MapPin className="w-5 h-5 mr-2" /> : <Globe className="w-5 h-5 mr-2" />}
                {mapMode === "india" ? "India" : "Global"} Alumni Distribution
              </span>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Interactive Map Placeholder */}
            <div className="map-container aspect-[4/3] bg-gradient-to-br from-alumni-light-blue to-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  {mapMode === "india" ? (
                    <MapPin className="w-16 h-16 mx-auto text-primary mb-4" />
                  ) : (
                    <Globe className="w-16 h-16 mx-auto text-primary mb-4" />
                  )}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Interactive {mapMode === "india" ? "India" : "World"} Map
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Click on locations to see alumni details
                  </p>
                  
                  {/* Mock Location Pins */}
                  <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
                    {currentLocations.slice(0, 4).map((location, index) => (
                      <Button
                        key={location.city}
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedLocation(location.city)}
                        className="text-xs"
                      >
                        <MapPin className="w-3 h-3 mr-1" />
                        {location.city.split(',')[0]} ({location.count})
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="map-overlay" />
            </div>
          </CardContent>
        </Card>

        {/* Location Details */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Location Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentLocations.map((location) => (
                <div
                  key={location.city}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer alumni-transition ${
                    selectedLocation === location.city
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedLocation(location.city)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{location.city}</p>
                      <p className="text-sm text-muted-foreground">{location.count} alumni</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{location.count}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Selected Location Details */}
          {selectedLocation && (
            <Card className="alumni-shadow-professional">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  {selectedLocation}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {currentLocations.find(l => l.city === selectedLocation)?.count}
                  </p>
                  <p className="text-sm text-muted-foreground">Alumni in this location</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Recent Alumni</p>
                  {getAlumniForLocation(selectedLocation).map((alumni, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/50">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                          {alumni.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{alumni.name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {alumni.role} at {alumni.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button size="sm" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  View All Alumni
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniMap;