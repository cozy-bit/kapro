import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'

// пока оставлю заглушки для страниц чтобы проверить роутинг
// const HomePage = () => <div className="text-center py-20 font-medium">Главная страница (В разработке)</div>;
const ManagerPage = () => (
	<div className='text-center py-20 font-medium'>
		Ваш менеджер (В разработке)
	</div>
)
const FaqPage = () => (
	<div className='text-center py-20 font-medium'>
		Вопросы и ответы (В разработке)
	</div>
)
const ContactsPage = () => (
	<div className='text-center py-20 font-medium'>Контакты (В разработке)</div>
)
const NotFoundPage = () => (
	<div className='text-center py-20 font-bold text-2xl'>
		404 - Страница не найдена
	</div>
)

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='manager' element={<ManagerPage />} />
				<Route path='faq' element={<FaqPage />} />
				<Route path='contacts' element={<ContactsPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}
