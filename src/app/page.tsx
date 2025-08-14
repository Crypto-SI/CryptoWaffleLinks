import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkCard } from "@/components/link-card";
import { Greeting } from "@/components/greeting";
import { Globe, Twitter, Youtube } from "lucide-react";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { WaffleIcon } from "@/components/icons/waffle-icon";

const coreLinks = [
  { href: "#", text: "Our Website", icon: <Globe className="h-6 w-6" /> },
  { href: "#", text: "YouTube Channel", icon: <Youtube className="h-6 w-6" /> },
  { href: "#", text: "Free Telegram", icon: <TelegramIcon className="h-6 w-6" /> },
  { href: "#", text: "Paid Telegram", icon: <TelegramIcon className="h-6 w-6 text-primary" /> },
  { href: "#", text: "Waffle Subscription", icon: <WaffleIcon className="h-6 w-6" /> },
];

const cryptoSILinks = [
  { href: "#", text: "Twitter", icon: <Twitter className="h-6 w-6 fill-current" /> },
  { href: "#", text: "Telegram", icon: <TelegramIcon className="h-6 w-6" /> },
];

const financialNavigatorLinks = [
  { href: "#", text: "Twitter", icon: <Twitter className="h-6 w-6 fill-current" /> },
  { href: "#", text: "Telegram", icon: <TelegramIcon className="h-6 w-6" /> },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>
      </div>
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-body">
        <div className="w-full max-w-2xl space-y-8">
          <header className="flex flex-col items-center space-y-4 text-center">
            <Avatar className="h-24 w-24 border-4 border-card shadow-lg">
              <AvatarImage src="https://placehold.co/100x100.png" alt="CryptoWaffle Links" data-ai-hint="logo crypto" />
              <AvatarFallback>CW</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-5xl font-bold font-headline text-foreground">
                CryptoWaffle Links
              </h1>
              <p className="text-lg text-muted-foreground">Your one-stop hub for all our content.</p>
            </div>
            <Greeting />
          </header>

          <div className="space-y-6">
            <LinkCard title="Core Channels" links={coreLinks} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LinkCard title="cryptoSI" description="Host & Analyst" links={cryptoSILinks} />
              <LinkCard title="The Financial Navigator" description="Host & Analyst" links={financialNavigatorLinks} />
            </div>
          </div>
          
          <footer className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CryptoWaffle. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
