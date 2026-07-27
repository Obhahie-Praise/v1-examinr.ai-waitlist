import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Students } from "@/components/students/students";
import { Institutions } from "@/components/institutions/institutions";
import { Waitlist } from "@/components/waitlist/waitlist";
import { Footer } from "@/components/footer/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 p-8 flex flex-col gap-12">
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
