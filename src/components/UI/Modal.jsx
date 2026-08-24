import {
	CloseOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Modal, message } from 'antd'

export default function OrderModalForm({ isOpen, onClose }) {
	const handleSubmit = e => {
		e.preventDefault()

		message.success('Ваша заявка успешно отправлена!')
		onClose()
	}
	return (
		<>
			<Modal
				open={isOpen}
				onCancel={onClose}
				footer={null}
				title={null}
				closeIcon={null}
				width={650}
				centered
				styles={{
					content: {
						padding: 0,
						borderRadius: '22px',
						overflow: 'hidden',
						background: '#f4f9fd',
					},
				}}
			>
				<div className='relative px-8 py-8 max-sm:px-5 max-sm:py-6'>
					<button
						type='button'
						onClick={onClose}
						className='absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full text-[#21385f] transition hover:bg-[#e5f1fa] max-sm:right-4 max-sm:top-4'
					>
						<CloseOutlined className='text-[28px]' />
					</button>

					<h2 className='mb-7 pr-12 text-3xl font-bold text-[#21385f] max-sm:text-2xl'>
						Заполните форму
					</h2>

					<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
						<div className='relative'>
							<input
								type='text'
								placeholder='Ваше имя'
								className='h-14 w-full rounded-2xl bg-[#e5f1fa] px-5 pr-12 text-base text-[#21385f] outline-none placeholder:text-[#21385f]'
							/>

							<UserOutlined className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#21385f]' />
						</div>

						<div className='relative'>
							<input
								type='tel'
								placeholder='Введите ваш номер телефона'
								className='h-14 w-full rounded-2xl bg-[#e5f1fa] px-5 pr-12 text-base text-[#21385f] outline-none placeholder:text-[#21385f]'
							/>

							<PhoneOutlined className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#21385f]' />
						</div>

						<div className='relative'>
							<input
								type='email'
								placeholder='Ваша электронная почта'
								className='h-14 w-full rounded-2xl bg-[#e5f1fa] px-5 pr-12 text-base text-[#21385f] outline-none placeholder:text-[#21385f]'
							/>

							<MailOutlined className='absolute right-5 top-1/2 -translate-y-1/2 text-lg text-[#21385f]' />
						</div>

						<textarea
							placeholder='Какой товар вы ищете или хотите доставить в Россию?'
							rows={2}
							className='w-full resize-none rounded-2xl bg-[#e5f1fa] px-5 py-4 text-base text-[#21385f] outline-none placeholder:text-[#21385f]'
						/>

						<button
							type='submit'
							className='h-14 w-full rounded-2xl bg-[#21385f] text-base font-semibold text-white transition hover:bg-[#1a2e50]'
						>
							Отправить заявку
						</button>
					</form>

					<p className='mt-6 text-sm leading-6 text-[#3766a0]'>
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
			</Modal>
		</>
	)
}
