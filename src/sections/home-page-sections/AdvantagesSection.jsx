import { useEffect, useRef, useState } from 'react'
import { advantagesData } from '../../data/advantagesData'

function chunk(arr, size) {
	const result = []
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size))
	}
	return result
}

const mobilePages = chunk(advantagesData, 2)

function AdvantageCard({ icon, text }) {
	return (
		<div className='flex flex-col items-start gap-2.5 rounded-3xl bg-[#B1DDFF] p-5 transition-transform duration-200 hover:-translate-y-2.5 md:p-6'>
			<img src={icon} alt='' className='size-28 md:size-24' />
			<p className='text-[16px] font-bold text-[#203253]'>{text}</p>
		</div>
	)
}

export function AdvantagesSection() {
	const trackRef = useRef(null)
	const [activePage, setActivePage] = useState(0)

	useEffect(() => {
		const track = trackRef.current
		if (!track) return

		const handleScroll = () => {
			const pageWidth = track.clientWidth
			if (!pageWidth) return
			setActivePage(Math.round(track.scrollLeft / pageWidth))
		}

		track.addEventListener('scroll', handleScroll, { passive: true })
		return () => track.removeEventListener('scroll', handleScroll)
	}, [])

	const goToPage = index => {
		const track = trackRef.current
		if (!track) return
		track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
	}

	return (
		<section className='px-2'>
			<div className='flex flex-col items-center gap-6 md:m-auto md:max-w-350 md:items-start md:gap-9'>
				<div className='flex flex-col items-start gap-3 md:max-w-155'>
					<h2 className='text-[24px] font-bold text-[#203253] md:text-[36px]'>
						Наши преимущества
					</h2>
					<p className='text-[14px] font-normal text-[#335D93] md:text-[18px]'>
						Мы предоставляем полный перечень услуг для качественного ведения
						товарного бизнеса в России
					</p>
				</div>

				<div className='hidden w-full md:grid md:grid-cols-5 md:gap-5'>
					{advantagesData.map(item => (
						<AdvantageCard key={item.id} icon={item.icon} text={item.text} />
					))}
				</div>

				<div className='w-full md:hidden'>
					<div
						ref={trackRef}
						className='flex w-full snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden'
						style={{ scrollbarWidth: 'none' }}
					>
						{mobilePages.map((page, pageIndex) => (
							<div
								key={pageIndex}
								className='flex w-full shrink-0 snap-start flex-col gap-3'
							>
								{page.map(item => (
									<AdvantageCard
										key={item.id}
										icon={item.icon}
										text={item.text}
									/>
								))}
							</div>
						))}
					</div>

					<div className='mt-4 flex items-center justify-center gap-2'>
						{mobilePages.map((_, index) => (
							<button
								key={index}
								type='button'
								aria-label={`Страница ${index + 1}`}
								onClick={() => goToPage(index)}
								className={`h-2 rounded-full transition-all duration-200 ${
									index === activePage ? 'w-6 bg-[#203253]' : 'w-2 bg-[#B7C6DB]'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
