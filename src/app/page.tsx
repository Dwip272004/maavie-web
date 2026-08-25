import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { NatureScienceTruth } from "@/components/sections/NatureScienceTruth";
import { QuizTeaser } from "@/components/sections/QuizTeaser";
import { Science } from "@/components/sections/Science";
import { Experts } from "@/components/sections/Experts";
import { Learn } from "@/components/sections/Learn";
import { BrandStory } from "@/components/sections/BrandStory";
import { Waitlist } from "@/components/sections/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <NatureScienceTruth />
        <QuizTeaser />
        <Science />
        <Experts />
        <Learn />
        <BrandStory />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
