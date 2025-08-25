"use client";

import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Youtube } from "lucide-react";

const youtubeChannels = [
  {
    name: "Smart Reach",
    url: "https://www.youtube.com/@smartreach5326",
    episodes: "Even Episodes"
  },
  {
    name: "Navigator's Vault", 
    url: "https://www.youtube.com/@NavigatorsVault",
    episodes: "Odd Episodes"
  }
];

export function YouTubeChannels() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <Youtube className="h-6 w-6" />
        <span className="flex-grow text-left font-medium">YouTube Channels</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
            </TooltipTrigger>
            <TooltipContent side="top" className="z-[100] max-w-xs">
              <p className="text-sm whitespace-nowrap">
                Smart Reach: Even numbered episodes<br />
                Navigator's Vault: Odd numbered episodes
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {youtubeChannels.map((channel, index) => (
        <Button
          key={index}
          asChild
          variant="secondary"
          size="sm"
          className="w-full h-12 justify-start gap-3 text-sm"
        >
          <a
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="h-4 w-4" />
            <div className="flex flex-col items-start">
              <span className="font-medium">{channel.name}</span>
              <span className="text-xs text-muted-foreground">{channel.episodes}</span>
            </div>
          </a>
        </Button>
      ))}
    </div>
  );
}