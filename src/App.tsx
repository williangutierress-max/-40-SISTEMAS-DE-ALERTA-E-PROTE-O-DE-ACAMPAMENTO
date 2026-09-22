import { AnnouncementBar } from './components/AnnouncementBar';
import { Hero } from './components/Hero';
import { MapsMarquee } from './components/MapsMarquee';
import { PerimeterExplanation } from './components/PerimeterExplanation';
import { PainUrgency } from './components/PainUrgency';
import { TargetAudience } from './components/TargetAudience';
import { FullPackage } from './components/FullPackage';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { GuaranteeSection } from './components/GuaranteeSection';
import { AccessSteps } from './components/AccessSteps';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black selection:bg-red-500 selection:text-white">
      <AnnouncementBar />
      <main>
        <Hero />
        <MapsMarquee />
        <PerimeterExplanation />
        <PainUrgency />
        <TargetAudience />
        <FullPackage />
        <BonusSection />
        <PricingSection />
        <Testimonials />
        <GuaranteeSection />
        <AccessSteps />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
