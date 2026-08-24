import { HeroSection } from '../sections/home-page-sections/HeroSection'
import { AdvantagesSection } from '../sections/home-page-sections/AdvantagesSection'
import { CasesSection } from '../sections/home-page-sections/CasesSection'
import { ContactFormSection } from '../sections/home-page-sections/ContactFormSection'
import ReviewsSection from '../sections/home-page-sections/ReviewsSection'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-15'>
			<HeroSection />
			<AdvantagesSection />
			<CasesSection />
			<ReviewsSection/>
			<ContactFormSection />
		</div>
	)
}
