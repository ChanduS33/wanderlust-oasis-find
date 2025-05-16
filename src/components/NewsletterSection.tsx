
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-booking-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Stay Updated with Special Offers
            </h2>
            <p className="text-white/80">
              Subscribe to our newsletter and be the first to receive exclusive
              deals and travel inspiration.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md md:max-w-none"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 text-white placeholder:text-white/60 border-white/30"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                className="bg-white text-booking-primary hover:bg-white/90"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="text-xs mt-2 text-white/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
