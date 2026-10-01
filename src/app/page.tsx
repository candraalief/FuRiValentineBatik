import { HeroSection } from "@/components/sections/HeroSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <CollectionShowcase />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
