"use client";

import { generateGreeting } from "@/ai/flows/personalized-greeting";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGreeting = async () => {
      try {
        const date = new Date();
        const hour = date.getHours();
        let timeOfDay = "morning";
        if (hour >= 12 && hour < 18) {
          timeOfDay = "afternoon";
        } else if (hour >= 18) {
          timeOfDay = "evening";
        }

        const result = await generateGreeting({ timeOfDay });
        setGreeting(result.greeting);
      } catch (error) {
        console.error("Failed to generate greeting:", error);
        setGreeting("Welcome!"); // Fallback greeting
      } finally {
        setIsLoading(false);
      }
    };

    getGreeting();
  }, []);

  if (isLoading) {
    return <Skeleton className="h-8 w-3/4 mx-auto" />;
  }

  return (
    <p className="text-center text-lg text-foreground/80">{greeting}</p>
  );
}
