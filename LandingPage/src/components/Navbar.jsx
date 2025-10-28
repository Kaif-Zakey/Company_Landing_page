import { useComponents } from "../context/ComponentContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navbar } = useComponents();

  return (
    <nav className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl sticky top-0 z-50 border-b border-gray-700">
      <div className="container">
        <div className="flex justify-center items-center py-3 sm:py-4">
          <div className="w-full max-w-4xl">
            <ul className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
              {navbar.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-blue-400 transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="ml-2 sm:ml-4">
                <Link
                  to="/dashboard"
                  className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap inline-block shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
