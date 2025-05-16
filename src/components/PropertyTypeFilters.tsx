
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PropertyTypeFiltersProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const PropertyTypeFilters: React.FC<PropertyTypeFiltersProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const propertyTypes = [
    { id: "all", label: "All Types" },
    { id: "house", label: "Houses" },
    { id: "apartment", label: "Apartments" },
    { id: "villa", label: "Villas" },
    { id: "cabin", label: "Cabins" },
    { id: "beach", label: "Beach" },
    { id: "countryside", label: "Countryside" },
  ];

  return (
    <div className="mb-8 overflow-x-auto pb-2 no-scrollbar">
      <Tabs value={selectedType} onValueChange={onTypeChange}>
        <TabsList className="h-auto p-1 bg-muted/30">
          {propertyTypes.map((type) => (
            <TabsTrigger
              key={type.id}
              value={type.id}
              className="px-4 py-2 whitespace-nowrap"
            >
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PropertyTypeFilters;
