"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import type React from 'react';

type Link = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

type FlipCardProps = {
  title: string;
  description?: string;
  links: Link[];
  image?: string;
  className?: string;
};

export function FlipCard({ title, description, links, image, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={cn("perspective-1000 relative w-full h-80", className)}>
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer",
          isFlipped && "rotate-y-180 z-50",
          !isFlipped && "z-0"
        )}
        onClick={handleFlip}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front face */}
        <Card 
          className="absolute inset-0 w-full h-full rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <CardHeader className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 bg-primary/10">
                {image ? (
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <EyeOff className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
              <CardTitle className="font-headline text-2xl">{title}</CardTitle>
              {description && (
                <CardDescription className="text-base">{description}</CardDescription>
              )}
              <p className="text-sm text-muted-foreground">Click to reveal links</p>
            </div>
          </CardHeader>
        </Card>

        {/* Back face */}
        <Card 
          className="absolute inset-0 w-full h-full rounded-2xl border-2 border-primary/40 bg-card backdrop-blur-sm shadow-2xl overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <CardTitle className="font-headline text-xl truncate">{title}</CardTitle>
                {description && (
                  <CardDescription className="text-sm">{description}</CardDescription>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip();
                }}
                className="shrink-0 ml-2"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0 pb-6">
            <div className="flex flex-col space-y-3">
              {links && links.length > 0 ? (
                links.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="secondary"
                    className="h-12 justify-start gap-3 px-3 text-sm transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground active:scale-100"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.icon}
                      <span className="flex-grow text-left truncate">{link.text}</span>
                    </a>
                  </Button>
                ))
              ) : (
                <div className="text-center text-muted-foreground py-4">
                  <p>No links available</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}