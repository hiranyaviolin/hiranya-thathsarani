import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import SriLankanFocus from "@/components/home/SriLankanFocus";
import EventsTeaser from "@/components/home/EventsTeaser";
import { CTA } from "@/constants/home";
import { VARIABLES } from "@/constants/variables";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      {/* <AboutTeaser /> */}
      {/* <SriLankanFocus /> */}
      {/* <EventsTeaser /> */}
<div>
  
</div>

      {/* Call to action section */}
      <section className="py-24 px-6 bg-gold-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-background rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-[60px] border-background rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-background mb-8">
            {CTA.title}
          </h2>
          <p className="text-background/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
            {CTA.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/booking"
              className="bg-background text-gold-primary px-10 py-4 rounded-full font-bold tracking-widest hover:scale-105 transition-transform"
            >
              {CTA.enquireButton}
            </a>
            <a
              href={`https://wa.me/${VARIABLES.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-background text-background px-10 py-4 rounded-full font-bold tracking-widest hover:bg-background hover:text-gold-primary transition-all"
            >
              {CTA.whatsappButton}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
