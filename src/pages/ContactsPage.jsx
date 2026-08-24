import { MobileOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import photo1 from '../assets/home-page-images/contacts-photo-1.jpg'
import photo2 from '../assets/home-page-images/contacts-photo-2.jpg'

const contacts = [
	{
		id: 'messenger',
		icon: <MobileOutlined />,
		label: 'WhatsApp & WeChat',
		value: '+86 19817983305',
		href: 'https://wa.me/8619817983305',
	},
	{
		id: 'email',
		icon: <MailOutlined />,
		label: 'Электронная почта',
		value: '1325427621@qq.com',
		href: 'mailto:1325427621@qq.com',
	},
	{
		id: 'address',
		icon: <EnvironmentOutlined />,
		label: 'Адрес',
		value: 'пример адреса компании',
		href: 'https://maps.google.com',
	},
]

export default function ContactsPage() {
	return (
		<section className='px-2'>
			<div className='flex flex-col gap-6 md:m-auto md:max-w-350 md:flex-row md:items-stretch md:gap-8'>
				<div className='flex flex-col gap-6 rounded-2xl bg-[#B1DDFF] p-5 md:w-125 md:shrink-0 md:gap-8 md:rounded-3xl md:p-10'>
					<div className='flex flex-col gap-3'>
						<h1 className='text-[28px] font-bold text-[#203253] md:text-[40px]'>
							Контакты
						</h1>
						<p className='text-[14px] font-normal text-[#335D93] md:text-[18px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className='flex flex-col gap-5 md:gap-6'>
						{contacts.map(({ id, icon, label, value, href }) => (
							<a key={id} href={href} className='flex items-center gap-4'>
								<span className='flex size-14 shrink-0 items-center justify-center rounded-full bg-[#72B3EA] text-[24px] text-white'>
									{icon}
								</span>
								<div className='flex flex-col'>
									<p className='text-[16px] font-bold text-[#203253] md:text-[18px]'>
										{label}
									</p>
									<p className='text-[14px] text-[#335D93] md:text-[16px]'>
										{value}
									</p>
								</div>
							</a>
						))}
					</div>

					<div className='flex flex-col gap-3 sm:flex-row'>
						<a
							href='#'
							className='flex items-center justify-center rounded-xl bg-[#203253] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-[#335D93] active:scale-[0.99]'
						>
							Подробнее
						</a>
						<a
							href='https://maps.google.com'
							target='_blank'
							rel='noreferrer'
							className='flex items-center justify-center rounded-xl bg-[#EBF2FC] px-6 py-3.5 text-sm font-medium text-[#203253] transition-all duration-200 hover:bg-[#7FAAE4]/30 active:scale-[0.99]'
						>
							Google Maps
						</a>
					</div>
				</div>

				<div className='flex flex-col gap-4 md:w-125 md:gap-6'>
					<img
						src={photo1}
						alt='Офис Kapro'
						className='h-56 w-full rounded-2xl object-cover md:h-70 md:rounded-3xl'
					/>
					<img
						src={photo2}
						alt='Склад Kapro'
						className='h-56 w-full rounded-2xl object-cover md:h-70 md:rounded-3xl'
					/>
				</div>
			</div>
		</section>
	)
}
