import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import SriLankanFocus from "@/components/home/SriLankanFocus";
import EventsTeaser from "@/components/home/EventsTeaser";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      {/* <AboutTeaser /> */}
      {/* <SriLankanFocus /> */}
      {/* <EventsTeaser /> */}
<div>
  
</div>

      <AboutSection />
      
      {/* Call to action section */}
      <CTASection />
    </div>
  );
}
