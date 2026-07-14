import { WaitlistModalProvider } from "@/components/waitlist-modal-context";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { QuizTeaser } from "@/components/sections/QuizTeaser";
import { Science } from "@/components/sections/Science";
import { Promise } from "@/components/sections/Promise";
import { Experts } from "@/components/sections/Experts";
import { Story } from "@/components/sections/Story";
import { Learn } from "@/components/sections/Learn";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <WaitlistModalProvider>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <QuizTeaser />
        <Science />
        <Promise />
        <Experts />
        <Story />
        <Learn />
        <Waitlist />
      </main>
      <Footer />
      <WaitlistModal />
    </WaitlistModalProvider>
  );
}
