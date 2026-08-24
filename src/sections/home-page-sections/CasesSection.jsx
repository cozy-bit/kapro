import { useState } from 'react';
import Button from '../../components/UI/Button';
import OrderModalForm from '../../components/UI/Modal';

import adress from '../../assets/home-page-images/adress.png';
import airplane from '../../assets/home-page-images/ariplane.png';
import kargo729 from '../../assets/home-page-images/kargo729.png';
import kargo729Desktop from '../../assets/home-page-images/kargo729-2.png';
import ships from '../../assets/home-page-images/ships.png';
import timer from '../../assets/home-page-images/timer.png';
import yuan from '../../assets/home-page-images/yuan.png';

export function CasesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="my-8 md:my-16">
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Заголовок секции */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#203253]">
            Наши кейсы
          </h2>
          <p className="text-sm md:text-base text-[#335D93] max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Главная карточка кейса */}
        <div className="bg-[#EBF2FF] rounded-3xl overflow-hidden flex flex-col md:grid md:grid-cols-12 items-stretch shadow-xs">
          {/* Левая текстовая часть */}
          <div className="p-6 md:p-10 lg:p-12 md:col-span-6 lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <span className="inline-block bg-[#E1EEFB] text-[#335D93] text-xs md:text-sm font-medium px-4 py-2 rounded-xl">
                пример кейса
              </span>

              <h3 className="text-2xl md:text-4xl font-extrabold text-[#203253] leading-tight">
                Доставка ирригаторов
              </h3>

              <p className="text-sm md:text-base text-[#335D93] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Параметры кейса (только для ПК) */}
            <div className="hidden md:grid grid-cols-3 gap-4 pt-2">
              <div className="space-y-1">
                <p className="text-xs text-[#8F9BB3]">Стоимость доставки</p>
                <div className="flex items-center gap-1">
                  <img src={yuan} alt="Юань" className="w-5 h-5 object-contain" />
                  <span className="text-xl lg:text-2xl font-bold text-[#203253]">
                    000
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-[#8F9BB3]">Срок доставки</p>
                <div className="flex items-center gap-1">
                  <img src={timer} alt="Срок" className="w-5 h-5 object-contain" />
                  <span className="text-xl lg:text-2xl font-bold text-[#203253]">
                    00 дня
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-[#8F9BB3]">Геопозиция</p>
                <div className="flex items-center gap-1">
                  <img src={adress} alt="Локация" className="w-5 h-5 object-contain" />
                  <span className="text-xl lg:text-2xl font-bold text-[#203253]">
                    Москва
                  </span>
                </div>
              </div>
            </div>

            {/* Кнопка заказа */}
            <div className="w-full md:w-44 pt-2">
              <Button
                variant="primary"
                onClick={() => setIsModalOpen(true)}
              >
                Заказать
              </Button>
            </div>
          </div>

          {/* Правая часть с фото: разделение на мобилку и ПК */}
          <div className="md:col-span-6 lg:col-span-6 w-full h-[260px] sm:h-[340px] md:h-full relative overflow-hidden">
            {/* Для мобилки */}
            <img
              src={kargo729}
              alt="Пример выполненной работы"
              className="w-full h-full object-cover object-center rounded-b-3xl md:hidden"
            />
            {/* Для ПК */}
            <img
              src={kargo729Desktop}
              alt="Пример выполненной работы"
              className="w-full h-full object-cover object-center rounded-r-3xl hidden md:block"
            />
          </div>
        </div>

        {/* Декоративная линия маршрута */}
        <div className="w-full pt-4">
          <img
            src={airplane}
            alt="Маршрут самолета"
            className="w-full md:hidden object-contain"
          />
          <img
            src={ships}
            alt="Маршрут кораблей"
            className="w-full hidden md:block object-contain"
          />
        </div>
      </div>

      <OrderModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}