import { HeroSection } from '../sections/home-page-sections/HeroSection';
import { AdvantagesSection } from '../sections/home-page-sections/AdvantagesSection';
import { CasesSection } from '../sections/home-page-sections/CasesSection';
import DeliverySection from '../sections/home-page-sections/DeliverySection';
import ReviewsSection from '../sections/home-page-sections/ReviewsSection';
import { ContactFormSection } from '../sections/home-page-sections/ContactFormSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-15">
      <HeroSection />
      <AdvantagesSection />
      <CasesSection />
      <DeliverySection />
      <ReviewsSection />
      <ContactFormSection />
    </div>
  );
}