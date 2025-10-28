import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />
      <Header />
      <main className="grow bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 tracking-tight">
                Welcome to Our Dynamic CMS
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This is a fully customizable landing page built with React and
                Tailwind CSS. Use the Dashboard to edit the header, navbar, and
                footer content dynamically.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4 mb-12 sm:mb-16 md:mb-20">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-5 text-center group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 text-center">
                  Customizable
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                  Edit all content through an intuitive dashboard interface
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-5 text-center group-hover:scale-110 transition-transform duration-300">
                  ☁️
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 text-center">
                  Cloud Storage
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                  Upload images directly to Cloudinary for fast delivery
                </p>
              </div>

              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1 group">
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-5 text-center group-hover:scale-110 transition-transform duration-300">
                  💾
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 text-center">
                  Persistent
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                  All changes are saved locally and persist across sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
