import { Link } from "react-router-dom";

import qrCode from "../../assets/home-page-images/qr-code.png";
import wechatIcon from "../../assets/home-page-images/wechat.png";
import whatsappIcon from "../../assets/home-page-images/whatsapp.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#203253] text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Логотипы слева */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div>
            <div className="font-bold text-2xl tracking-tight text-white mb-2">
              H729 kapro
            </div>

            <p className="text-gray-400 text-xs uppercase tracking-wider">
              Hun River Import and Export Corporation
            </p>
          </div>
          <div className="text-xs text-gray-400 font-medium tracking-wide flex items-center gap-1.5 opacity-80">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <span>Digilab</span>
          </div>
        </div>

        {/* Навигация по центру */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-200">
          <Link to="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <Link to="/manager" className="hover:text-white transition-colors">
            Ваш менеджер
          </Link>
          <Link to="/faq" className="hover:text-white transition-colors">
            Вопросы и ответы
          </Link>
          <Link to="/contacts" className="hover:text-white transition-colors">
            Контакты
          </Link>
        </nav>

        {/* Соцсети и QR-код строго по центру относительно друг друга */}
        <div className="flex flex-col items-center gap-3">
          {/* Иконки WeChat и WhatsApp отцентрированы */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="weixin://dl/chat"
              target="_blank"
              rel="noreferrer"
              className="w-7 h-7 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src={wechatIcon}
                alt="WeChat"
                className="w-7 h-7 object-contain"
              />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>

          {/* QR-код */}
          <div className="w-28 h-28 rounded-xl flex items-center justify-center shadow-xs">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
