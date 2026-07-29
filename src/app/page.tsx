import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Students } from "@/components/students/students";
import { Institutions } from "@/components/institutions/institutions";
import { Waitlist } from "@/components/waitlist/waitlist";
import { Footer } from "@/components/footer/footer";
import { BackgroundWave } from "@/components/background-wave";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundWave />
      <Navbar />
      <main className="relative z-10 flex-1 pt-32 p-8 flex flex-col md:gap-100 sm:gap-60 gap-50">
        <Hero />
        <About />
        <Students />
        <Institutions />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
