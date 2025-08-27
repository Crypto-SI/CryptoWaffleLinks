import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkCard } from "@/components/link-card";
import { FlipCard } from "@/components/flip-card";
import { Greeting } from "@/components/greeting";
import { ArrowLeft, Globe, Twitter, Youtube, Handshake, Instagram } from "lucide-react";
import { TelegramIcon } from "@/components/icons/telegram-icon";
import { WaffleIcon } from "@/components/icons/waffle-icon";
import { YouTubeChannels } from "@/components/youtube-channels";

const coreLinks = [
  { href: "https://cryptowaffle.fun", text: "cryptowaffle.fun", icon: <Globe className="h-6 w-6" /> },
  { href: "https://t.me/+AVoimeTI8Ew5ZGQ0", text: "Free Telegram", icon: <TelegramIcon className="h-6 w-6" /> },
  { href: "https://t.me/CryptoWaffleVIP_Bot?start=subscribe", text: "Paid Telegram", icon: <TelegramIcon className="h-6 w-6 text-primary" /> },
  { href: "https://waffle.cryptosi.org/", text: "Waffle Subscription", icon: <WaffleIcon className="h-6 w-6" /> },
];

const cryptoSILinks = [
  { href: "https://twitter.com/crypto_si", text: "Twitter", icon: <Twitter className="h-5 w-5 fill-current" /> },
  { href: "https://t.me/Crypto_SI", text: "Telegram", icon: <TelegramIcon className="h-5 w-5" /> },
  { href: "https://www.instagram.com/cryptosi.eth/", text: "Instagram", icon: <Instagram className="h-5 w-5" /> },
];

const financialNavigatorLinks = [
  { href: "https://x.com/Alex_Codling_", text: "Twitter", icon: <Twitter className="h-5 w-5 fill-current" /> },
  { href: "https://t.me/Alex_Codling", text: "Telegram", icon: <TelegramIcon className="h-5 w-5" /> },
  { href: "https://www.instagram.com/financial_navigator_/", text: "Instagram", icon: <Instagram className="h-5 w-5" /> },
];

const partnerLinks = [
  { href: "https://support.weex.com/en/register?vipCode=vd7u", text: "WEEX Exchange", icon: <Globe className="h-6 w-6" /> },
  { href: "https://hyperliquid.xyz/", text: "Hyperliquid Dex", icon: <Globe className="h-6 w-6" /> },
  { href: "https://lexconsulting.org/", text: "Lex Consulting", icon: <Handshake className="h-6 w-6" /> },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 blur-[100px]"></div>
      </div>
      <div className="absolute top-4 left-4 z-10">
        <a 
          href="https://cryptowaffle.fun" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          back to cryptowaffle.fun
        </a>
      </div>
      <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-body">
        <div className="w-full max-w-2xl space-y-8 overflow-visible">
          <header className="flex flex-col items-center space-y-4 text-center">
            <Avatar className="h-24 w-24 border-4 border-card shadow-lg overflow-hidden">
              <AvatarImage 
                src="/images/100x100.png" 
                alt="CryptoWaffle Links" 
                className="scale-150 translate-y-0"
              />
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

          <div className="space-y-6 overflow-visible">
            <LinkCard title="Core Channels" links={coreLinks} />
            <LinkCard title="YouTube Channels" className="overflow-visible">
              <YouTubeChannels />
            </LinkCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative isolate mb-16 overflow-visible z-10">
              <FlipCard title="CryptoSI" description="Host & Analyst" links={cryptoSILinks} image="/images/Cryptosi.jpg" />
              <FlipCard title="The Financial Navigator" description="Host & Analyst" links={financialNavigatorLinks} image="/images/nav.png" />
            </div>
            <LinkCard title="Partners" links={partnerLinks} className="relative z-0" />
          </div>
          
          <footer className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CryptoWaffle. All Rights Reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
