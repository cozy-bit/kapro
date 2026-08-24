import { deliveryOptions } from '../../data/deliveryData';
import Button from '../../components/UI/Button';

import planeIcon from '../../assets/home-page-images/plane-icon.png';
import truckIcon from '../../assets/home-page-images/truck.png';
import trainIcon from '../../assets/home-page-images/train.png';
import shipIcon from '../../assets/home-page-images/ship.png';

const iconsMap = {
  plane: planeIcon,
  truck: truckIcon,
  train: trainIcon,
  ship: shipIcon,
};

export default function DeliverySection({ onOrderClick }) {
  return (
    <section className="my-16 md:my-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#222B45] max-w-md leading-tight">
          Выберите подходящий вариант доставки
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deliveryOptions.map((item) => (
          <div
            key={item.id}
            className="bg-[#EBF2FF] rounded-3xl border border-[#D1E0F7] p-6 flex flex-col items-center text-center justify-between min-h-[340px] hover:shadow-lg transition-all duration-300"
          >
            {/* Круглый голубой фон под белую иконку */}
            <div className="w-16 h-16 rounded-full bg-[#7FAAE4] flex items-center justify-center mb-4 shadow-sm">
              <img
                src={iconsMap[item.iconType]}
                alt={item.title}
                className="w-8 h-8 object-contain brightness-0 invert"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center my-2">
              <h3 className="text-lg font-bold text-[#222B45] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium mb-1">
                {item.days}
              </p>
              <p className="text-base font-semibold text-[#222B45]">
                {item.price}
              </p>
            </div>

            <Button
              variant="primary"
              onClick={() => onOrderClick?.(item)}
              className="mt-4"
            >
              Заказать
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}