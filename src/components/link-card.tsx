import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type React from 'react';

type Link = {
  href: string;
  text: string;
  icon: React.ReactNode;
};

type LinkCardProps = {
  title: string;
  description?: string;
  links: Link[];
  className?: string;
};

export function LinkCard({ title, description, links, className }: LinkCardProps) {
  return (
    <Card className={cn("w-full overflow-hidden rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl", className)}>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        {description && (
          <CardDescription className="text-base">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          {links.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="secondary"
              className="h-14 transform-gpu justify-start gap-4 px-4 text-base transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-accent-foreground active:scale-100"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span className="flex-grow text-left">{link.text}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
