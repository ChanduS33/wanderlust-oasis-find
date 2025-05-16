
import React from "react";
import { Search, MapPin, Calendar, Star } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 mb-4 text-booking-primary" />,
    title: "Search with Ease",
    description:
      "Find your ideal accommodation with our powerful search filters and intuitive interface.",
  },
  {
    icon: <MapPin className="h-6 w-6 mb-4 text-booking-primary" />,
    title: "Discover Destinations",
    description:
      "Explore amazing locations and unique properties around the world.",
  },
  {
    icon: <Calendar className="h-6 w-6 mb-4 text-booking-primary" />,
    title: "Instant Booking",
    description:
      "Book your stay in minutes with our streamlined booking process.",
  },
  {
    icon: <Star className="h-6 w-6 mb-4 text-booking-primary" />,
    title: "Verified Reviews",
    description:
      "Make informed decisions with authentic reviews from real guests.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-booking-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Book With Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make our booking platform the preferred
            choice for travelers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
