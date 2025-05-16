
import React from "react";
import PropertyCard from "./PropertyCard";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Miami, Florida",
    price: 350,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Villa",
    features: ["Beachfront", "Pool", "Wifi", "Kitchen"],
  },
  {
    id: 2,
    title: "Modern Downtown Apartment",
    location: "New York, NY",
    price: 180,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Apartment",
    features: ["Skyline View", "Gym", "Parking"],
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 220,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Cabin",
    features: ["Mountain View", "Fireplace", "Hot Tub"],
  },
  {
    id: 4,
    title: "Charming Countryside Cottage",
    location: "Bath, England",
    price: 170,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Cottage",
    features: ["Garden", "Pet Friendly", "Breakfast"],
  },
  {
    id: 5,
    title: "Stunning Lakeside Retreat",
    location: "Lake Tahoe, CA",
    price: 280,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "House",
    features: ["Lakefront", "Boat Dock", "BBQ"],
  },
  {
    id: 6,
    title: "Historic City Loft",
    location: "Boston, MA",
    price: 200,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    type: "Loft",
    features: ["Historic Building", "Exposed Brick", "Modern"],
  },
];

const PropertyList: React.FC = () => {
  return (
    <div className="my-12">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Properties</h2>
          <a
            href="/properties"
            className="text-booking-primary hover:underline text-sm font-medium"
          >
            View all properties
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
