import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Главная', path: '/' },
  { name: 'Ваш менеджер', path: '/manager' },
  { name: 'Вопросы и ответы', path: '/faq' },
  { name: 'Контакты', path: '/contacts' },
];

export default function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-[280px] max-w-[85vw] bg-white h-full p-6 flex flex-col justify-between shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-end mb-8">
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `text-base font-medium py-2.5 px-4 rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#7FAAE4] bg-[#EBF2FC]'
                      : 'text-[#222B45] hover:text-[#7FAAE4]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="text-xs text-gray-400 text-center">
          © H729 Kapro
        </div>
      </div>
    </div>,
    document.body
  );
}
