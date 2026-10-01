import { HeroSection } from "@/components/sections/HeroSection";
import { WorkshopLocationSection } from "@/components/sections/WorkshopLocationSection";
import { OrderProcessSection } from "@/components/sections/OrderProcessSection";
import { BekasiMotifsSection } from "@/components/sections/BekasiMotifsSection";
import { CollectionShowcase } from "@/components/sections/CollectionShowcase";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkshopLocationSection />
      <OrderProcessSection />
      <BekasiMotifsSection />
      <CollectionShowcase />
      <AboutPreview />
      <CTASection />
    </>
  );
}
