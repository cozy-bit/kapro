import heroPhoto from '../assets/home-page-images/hero-photo.png';

export default function ManagerPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* Верхний блок с фото менеджера */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-[#EBF2FC] rounded-3xl p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#222B45] mb-6">
            Ваш менеджер
          </h1>
          <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>

        {/* Правая плашка с фото */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-[#BBE0FD] flex items-end justify-center min-h-[360px] pt-6">
          <img
            src={heroPhoto}
            alt="Ваш менеджер"
            className="w-full max-w-[340px] md:max-w-none h-auto object-contain object-bottom select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Текстовые блоки */}
      <div className="space-y-10 max-w-4xl">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222B45]">
            Пример заголовка
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#222B45]">
            Пример заголовка
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>

      {/* Цитата */}
      <div className="bg-[#EBF2FC] w-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <span className="text-6xl md:text-8xl font-serif text-[#222B45]/20 absolute top-2 left-6 select-none">“</span>
        <p className="text-sm md:text-base text-[#222B45] font-medium italic relative z-10 max-w-3xl mx-auto text-center py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <span className="text-6xl md:text-8xl font-serif text-[#222B45]/20 absolute bottom-[-20px] right-6 select-none">”</span>
      </div>
    </div>
  );
}