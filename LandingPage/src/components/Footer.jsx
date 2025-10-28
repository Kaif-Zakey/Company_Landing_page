import { useComponents } from "../context/ComponentContext";

const Footer = () => {
  const { footer } = useComponents();

  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white py-8 sm:py-10 border-t border-gray-800">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center tracking-tight px-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
            <div className="flex flex-col items-center text-center p-4 sm:p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-gray-700 group">
              <div className="bg-blue-500/20 p-2.5 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-2 text-white">
                Email
              </h4>
              <a
                href={`mailto:${footer.email}`}
                className="text-gray-300 hover:text-blue-400 transition-colors break-all text-sm"
              >
                {footer.email}
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-gray-700 group">
              <div className="bg-green-500/20 p-2.5 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-2 text-white">
                Phone
              </h4>
              <a
                href={`tel:${footer.phone}`}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm"
              >
                {footer.phone}
              </a>
            </div>
            <div className="flex flex-col items-center text-center p-4 sm:p-5 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm border border-gray-700 sm:col-span-2 lg:col-span-1 group">
              <div className="bg-purple-500/20 p-2.5 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-base sm:text-lg mb-2 text-white">
                Address
              </h4>
              <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
                {footer.address}
              </p>
            </div>
          </div>
          <div className="pt-4 sm:pt-6 border-t border-gray-800 text-center px-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Company CMS. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
