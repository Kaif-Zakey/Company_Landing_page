import { useComponents } from "../context/ComponentContext";

const Header = () => {
  const { header } = useComponents();

  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12 md:py-16">
      <div className="container">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight px-4">
              {header.title}
            </h1>
            {header.imageUrl && (
              <div className="flex justify-center items-center px-4">
                <div className="relative group">
                  <img
                    src={header.imageUrl}
                    alt={header.title}
                    className="rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover border-4 border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                  />
                  <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
