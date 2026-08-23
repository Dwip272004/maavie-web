import { WaitlistModalProvider } from "@/components/waitlist-modal-context";
import { WaitlistModal } from "@/components/WaitlistModal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { NatureScienceTruth } from "@/components/sections/NatureScienceTruth";
import { QuizTeaser } from "@/components/sections/QuizTeaser";
import { Science } from "@/components/sections/Science";
import { Ingredients } from "@/components/sections/Ingredients";
import { BrandStory } from "@/components/sections/BrandStory";
import { Experts } from "@/components/sections/Experts";
import { Learn } from "@/components/sections/Learn";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <WaitlistModalProvider>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <NatureScienceTruth />
        <QuizTeaser />
        <Science />
        <Ingredients />
        <BrandStory />
        <Experts />
        <Learn />
        <Waitlist />
      </main>
      <Footer />
      <WaitlistModal />
    </WaitlistModalProvider>
  );
}
