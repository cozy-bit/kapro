import Button from '../../components/UI/Button'

import airplane from '../../assets/home-page-images/ariplane.png'
import kargo729 from '../../assets/home-page-images/kargo729.png'
import kargo7292 from '../../assets/home-page-images/kargo729-2.png'
import ships from '../../assets/home-page-images/ships.png'
import adress from '../../assets/home-page-images/adress.png'
import yuan from '../../assets/home-page-images/yuan.png'
import timer from '../../assets/home-page-images/timer.png'

export function CasesSection() {
	return (
		<>
			<section className='px-2'>
				<div className='flex flex-col items-center gap-6 md:max-w-350 md:m-auto md:items-start md:gap-19'>
					<aside className='flex flex-col items-start gap-3 md:flex-row md:justify-between md:w-full'>
						<h1 className='text-[24px] font-bold md:text-[36px] text-[#203253]'>
							Наши кейсы
						</h1>
						<p className='text-[14px] font-normal md:text-[18px] text-[#335D93]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod <br className='hidden md:block' /> tempor incididunt ut
							labore et dolore magna aliqua.
						</p>
					</aside>
					<aside className='bg-[#F4FAFF] rounded-2xl  flex flex-col items-start gap-4 p-4 md:flex-row md:items-center md:justify-between md:w-full md:p-0 md:gap-20	'>
						<div className='flex flex-col items-start gap-4 md:justify-between md:gap-7 md:items-start'>
							<Button variant='secondary' className='max-w-37 text-[14px]'>
								пример кейса
							</Button>
							<h1 className='text-[24px] font-bold md:text-[36px] text-[#203253]'>
								Пример <br className='md:hidden' /> выполненной{' '}
								<br className='md:hidden' /> работы
							</h1>
							<p className='text-[14px] font-normal md:text-[18px] text-[#335D93]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing eit, sed
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className='hidden  md:flex justify-between w-full text-[#335D93]'>
								<div className='flex flex-col items-start'>
									<p>Стоимость доставки</p>
									<div className='flex items-center gap-1'>
										<img src={yuan} alt='' className='size-8' />
										<span className='text-[24px] text-[#203253] font-semibold'>
											000
										</span>
									</div>
								</div>
								<div className='flex flex-col items-start'>
									<p>Срок доставки</p>
									<div className='flex items-center gap-1'>
										<img src={timer} alt='' className='size-8' />{' '}
										<span className='text-[24px] text-[#203253] font-semibold'>
											00 дня
										</span>
									</div>
								</div>
								<div className='flex flex-col items-start'>
									<p>Геопозиция</p>
									<div className='flex items-center gap-1'>
										<img src={adress} alt='' className='size-8' />{' '}
										<span className='text-[24px] text-[#203253] font-semibold'>
											Москва
										</span>
									</div>
								</div>
							</div>
							<Button className='md:max-w-60'>Заказать</Button>
						</div>

						<img src={kargo729} alt='kargo729' className='md:hidden' />
						<img
							src={kargo7292}
							alt='kargo729'
							className='hidden md:block w-150'
						/>
					</aside>
					<img src={airplane} alt='airplane' className='w-full md:hidden' />
					<img src={ships} alt='airplane' className='w-full hidden md:block' />
				</div>
			</section>
		</>
	)
}
