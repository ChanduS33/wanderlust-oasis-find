
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="search-container w-full min-h-[600px] flex flex-col items-center justify-center text-white p-6 animate-fade-in">
      <div className="text-center max-w-3xl mb-8">
        <h1 className="text-3xl font-bold mb-4 md:text-5xl lg:text-6xl">
          Find Your Perfect Stay
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Discover amazing places to stay for your next adventure
        </p>
      </div>

      <Card className="w-full max-w-3xl bg-white/95 backdrop-blur">
        <CardContent className="p-0">
          <Tabs defaultValue="stay" className="w-full">
            <TabsList className="w-full grid grid-cols-2 h-14 rounded-none">
              <TabsTrigger value="stay" className="text-base">
                Find a Stay
              </TabsTrigger>
              <TabsTrigger value="experience" className="text-base">
                Find Experiences
              </TabsTrigger>
            </TabsList>
            <TabsContent value="stay" className="p-4">
              <div className="grid gap-4 md:grid-cols-[1fr,1fr,auto]">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Where
                  </label>
                  <Input
                    placeholder="Search destinations"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Dates
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-white",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Button size="lg" className="self-end">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="p-4">
              <div className="grid gap-4 md:grid-cols-[1fr,1fr,auto]">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Activity
                  </label>
                  <Input
                    placeholder="Search activities"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Location
                  </label>
                  <Input
                    placeholder="Where"
                    className="w-full"
                  />
                </div>
                <Button size="lg" className="self-end">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroSection;
