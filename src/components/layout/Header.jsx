import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const navLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Ваш менеджер', path: '/manager' },
  { name: 'Вопросы и ответы', path: '/faq' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2">
          <div className="font-extrabold text-xl tracking-tight text-red-600 flex flex-col leading-none">
            <span>H729 kapro</span>
            <span className="text-[9px] text-gray-500 font-normal tracking-wider uppercase">Hun River Import & Export</span>
          </div>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#7FAAE4] ${
                  isActive ? 'text-[#7FAAE4]' : 'text-[#222B45]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Бургер-кнопка */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 text-[#222B45] hover:text-[#7FAAE4]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}