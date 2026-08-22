import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-footer text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div>
          <div className="font-bold text-2xl tracking-tight text-white mb-2">
            H729 kapro
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-wider">
            Hun River Import and Export Corporation
          </p>
        </div>

        <nav className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Главная</Link>
          <Link to="/manager" className="hover:text-white transition-colors">Ваш менеджер</Link>
          <Link to="/faq" className="hover:text-white transition-colors">Вопросы и ответы</Link>
          <Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link>
        </nav>

        <div className="flex justify-center md:justify-end items-center gap-4">
          <div className="w-20 h-20 bg-white rounded-lg p-1.5 flex items-center justify-center">
            <span className="text-gray-800 text-[10px] font-mono text-center">QR Code</span>
          </div>
        </div>
      </div>
    </footer>
  );
}