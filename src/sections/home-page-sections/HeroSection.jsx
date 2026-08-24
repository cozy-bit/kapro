import { useState } from 'react'
import { PhoneOutlined } from '@ant-design/icons'
import { message } from 'antd'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import heroPhoto from '../../assets/home-page-images/hero-photo.png'
import checkIcon from '../../assets/home-page-images/check-icon.svg'

const freebies = [
	'Переводчик',
	'Поиск товара',
	'Хранение грузов',
	'Досмотр грузов',
]

export function HeroSection() {
	const [phone, setPhone] = useState('')
	const [product, setProduct] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		message.success('Заявка отправлена, мы скоро свяжемся с вами!')
		setPhone('')
		setProduct('')
	}

	return (
		<section className='px-2'>
			<div className='relative mx-auto flex flex-col overflow-hidden rounded-2xl bg-[#B1DDFF] md:max-w-350 md:flex-row md:items-stretch md:rounded-[36px]'>
				<div className='flex flex-col gap-5 p-5 md:w-[42%] md:justify-center md:gap-8 md:py-13 md:pl-13 md:pr-6'>
					<h1 className='text-[26px] font-bold leading-tight text-[#203253] md:text-[48px]'>
						Доставка грузов из Китая в Россию
					</h1>

					<div className='flex flex-col gap-2.5'>
						<p className='text-[14px] text-[#335D93] md:text-[16px]'>
							Мы предоставляем бесплатно:
						</p>
						<div className='grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-x-10 md:gap-y-4'>
							{freebies.map(item => (
								<div key={item} className='flex items-center gap-2.5'>
									<img src={checkIcon} alt='' className='size-4 md:size-5' />
									<span className='text-[14px] text-[#335D93] md:text-[16px]'>
										{item}
									</span>
								</div>
							))}
						</div>
					</div>

					<form onSubmit={handleSubmit} className='flex flex-col gap-2.5'>
						<Input
							type='tel'
							name='phone'
							placeholder='Введите ваш номер телефона'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							icon={<PhoneOutlined />}
							required
						/>
						<Input
							type='text'
							name='product'
							placeholder='Какой товар вы ищите или хотите доставить в Россию?'
							value={product}
							onChange={e => setProduct(e.target.value)}
						/>
						<Button type='submit'>Получить 100$ скидку на доставку</Button>
					</form>
				</div>

				<img
					src={heroPhoto}
					alt='Менеджер Kapro'
					className='h-[274px] w-full object-cover object-top md:ml-auto md:h-auto md:w-[45%] md:object-center'
				/>
			</div>
		</section>
	)
}
