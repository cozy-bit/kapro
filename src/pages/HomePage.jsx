import { CasesSection } from '../sections/home-page-sections/CasesSection'
import { ContactFormSection } from '../sections/home-page-sections/ContactFormSection'

export default function HomePage() {
	return (
		<div className='flex flex-col gap-15'>
			<CasesSection />
			<ContactFormSection />
		</div>
	)
}
