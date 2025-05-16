
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    properties: 1250,
  },
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    properties: 980,
  },
  {
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    properties: 1460,
  },
  {
    name: "Sydney",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    properties: 760,
  },
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Popular Destinations</h2>
          <a
            href="/destinations"
            className="text-booking-primary hover:underline text-sm font-medium"
          >
            Explore all destinations
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <a href={`/destinations/${destination.name.toLowerCase()}`} key={index}>
              <Card className="overflow-hidden h-64 group">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white z-20">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-sm opacity-90">
                      {destination.properties} properties
                    </p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
