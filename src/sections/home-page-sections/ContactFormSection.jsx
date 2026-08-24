import { useState } from 'react'
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { message } from 'antd'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import whatsappWechatIcon from '../../assets/home-page-images/whatsapp-wechat-icon.svg'
import emailIcon from '../../assets/home-page-images/email-icon.svg'

const contacts = [
	{
		id: 'messenger',
		icon: whatsappWechatIcon,
		label: 'WhatsApp & WeChat',
		value: '+86 19817983305',
		href: 'https://wa.me/8619817983305',
	},
	{
		id: 'email',
		icon: emailIcon,
		label: 'Электронная почта',
		value: '1325427621@qq.com',
		href: 'mailto:1325427621@qq.com',
	},
]

export function ContactFormSection() {
	const [form, setForm] = useState({ name: '', phone: '', email: '', product: '' })

	const handleChange = e => {
		const { name, value } = e.target
		setForm(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		message.success('Заявка отправлена, мы скоро свяжемся с вами!')
		setForm({ name: '', phone: '', email: '', product: '' })
	}

	return (
		<section className='px-2'>
			<div className='flex flex-col gap-10 md:m-auto md:max-w-350 md:flex-row md:items-start md:justify-between md:gap-12'>
				<div className='flex flex-col gap-6 md:order-2 md:max-w-125 md:gap-15'>
					<div className='flex flex-col gap-3'>
						<h2 className='text-[24px] font-bold text-[#203253] md:text-[36px]'>
							Рассчитайте стоимость доставки, отправив заявку
						</h2>
						<p className='text-[14px] font-normal text-[#335D93] md:text-[18px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>

					<div className='flex flex-col gap-6 md:gap-7.5'>
						{contacts.map(({ id, icon, label, value, href }) => (
							<a
								key={id}
								href={href}
								className='flex items-center gap-4 md:gap-7.5'
							>
								<img src={icon} alt='' className='size-14 shrink-0 md:size-18' />
								<div className='flex flex-col gap-1'>
									<p className='text-[18px] font-bold text-[#203253] md:text-[24px]'>
										{label}
									</p>
									<p className='text-[16px] text-[#335D93] md:text-[18px]'>
										{value}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>

				<div className='rounded-2xl bg-[#F4FAFF] p-5 md:order-1 md:w-155 md:rounded-3xl md:p-9'>
					<form onSubmit={handleSubmit} className='flex flex-col gap-3 md:gap-5'>
						<Input
							type='text'
							name='name'
							placeholder='Ваше имя'
							value={form.name}
							onChange={handleChange}
							icon={<UserOutlined />}
							required
						/>
						<Input
							type='tel'
							name='phone'
							placeholder='Введите ваш номер телефона'
							value={form.phone}
							onChange={handleChange}
							icon={<PhoneOutlined />}
							required
						/>
						<Input
							type='email'
							name='email'
							placeholder='Ваша электронная почта'
							value={form.email}
							onChange={handleChange}
							icon={<MailOutlined />}
							required
						/>
						<Input
							type='text'
							name='product'
							placeholder='Какой товар вы ищите или хотите доставить в Россию?'
							value={form.product}
							onChange={handleChange}
						/>

						<Button type='submit'>Получить 100$ скидку на доставку</Button>
					</form>

					<p className='mt-5 text-[13px] leading-6 text-[#335D93] md:mt-6 md:text-[14px]'>
						Отправляя заявку вы соглашаетесь с{' '}
						<a href='#' className='underline'>
							Условиями использования
						</a>{' '}
						и{' '}
						<a href='#' className='underline'>
							Политикой конфиденциальности
						</a>
						, тем самым соглашаетесь на обработку персональных данных
					</p>
				</div>
			</div>
		</section>
	)
}
