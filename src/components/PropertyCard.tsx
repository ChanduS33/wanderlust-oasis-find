
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  type: string;
  features?: string[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  price,
  rating,
  image,
  type,
  features = [],
}) => {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow property-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover property-image"
        />
        <Badge className="absolute top-2 left-2 bg-black/70 hover:bg-black/70 text-white">
          {type}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-2">{location}</p>
        {features.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs font-normal">
                {feature}
              </Badge>
            ))}
            {features.length > 2 && (
              <Badge variant="outline" className="text-xs font-normal">
                +{features.length - 2} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 flex justify-between items-center">
        <p className="font-semibold">
          ${price}
          <span className="text-muted-foreground font-normal text-sm"> / night</span>
        </p>
        <a href={`/property/${id}`} className="text-sm font-medium text-booking-primary hover:underline">
          View Details
        </a>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
