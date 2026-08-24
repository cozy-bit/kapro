import reviewsData from '../../data/reviewsData'

const ReviewsSection = () => {
	return (
		<section className='py-[80px]'>
			<div className='mx-auto max-w-[1216px] px-6'>
				<div className='mb-[36px] flex md:flex-row flex-col items-start justify-between gap-10'>
					<h2 className='max-w-[400px] text-[34px] font-bold leading-[1.15] text-[#23395D]'>
						Отзывы
						<br />о нашей работе
					</h2>

					<p className='max-w-[600px] pt-[4px] text-[16px] leading-[1.45] text-[#4776B4]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-[52px_16px] md:grid-cols-2'>
					{reviewsData.map(review => (
						<article
							key={review.id}
							className='min-h-[348px] rounded-[20px] bg-white p-[32px]'
						>
							<div className='mb-[26px] flex items-center gap-[28px]'>
								<h3 className='text-[20px] font-bold leading-none text-[#23395D]'>
									{review.title}
								</h3>

								<div className='flex gap-[3px] text-[18px] leading-none text-[#69AFE7]'>
									{Array.from({ length: review.rating }).map((_, index) => (
										<span key={index}>★</span>
									))}
								</div>
							</div>

							<p className='text-[15px] leading-[1.5] text-[#4776B4]'>
								{review.text}
							</p>

							<div className='mt-[34px] flex items-center gap-[15px]'>
								<div className='h-[43px] w-[43px] rounded-full bg-[#69AFE7]' />

								<span className='text-[15px] font-bold text-[#23395D]'>
									{review.name}
								</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ReviewsSection
