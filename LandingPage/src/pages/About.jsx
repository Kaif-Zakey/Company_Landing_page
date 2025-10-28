import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-y-auto">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              About Us
            </h1>
            <p className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto px-4">
              Building innovative solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="grow bg-linear-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Company Story */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 md:mb-24 mx-4 border border-gray-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  We are a dynamic company committed to delivering exceptional
                  digital solutions. Our team of experienced professionals works
                  tirelessly to create innovative products that help businesses
                  thrive in the digital age.
                </p>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Founded with a vision to simplify content management, we've
                  grown into a trusted partner for organizations looking to
                  enhance their online presence and streamline their digital
                  operations.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 my-8 sm:my-10 md:my-12 px-4">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 my-4 sm:my-6 border border-gray-100 group hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  To empower businesses with cutting-edge technology and
                  intuitive tools that make content management effortless and
                  efficient.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 my-4 sm:my-6 border border-gray-100 group hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  👁️
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  To become the leading provider of innovative CMS solutions
                  that transform how businesses manage and deliver digital
                  content.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 my-8 sm:my-10 md:my-12 mx-4 border border-gray-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                <div className="text-center group my-4 sm:my-6">
                  <div className="bg-blue-100 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl md:text-4xl">💡</span>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Innovation
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Constantly pushing boundaries to create better solutions
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-green-100 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl sm:text-4xl md:text-5xl">🤝</span>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Integrity
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                    Building trust through transparency and honesty
                  </p>
                </div>

                <div className="text-center group my-4 sm:my-6">
                  <div className="bg-purple-100 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl md:text-4xl">⭐</span>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Excellence
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Striving for the highest quality in everything we do
                  </p>
                </div>

                <div className="text-center group my-4 sm:my-6">
                  <div className="bg-orange-100 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl md:text-4xl">🌱</span>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Growth
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Continuous learning and improvement in our journey
                  </p>
                </div>

                <div className="text-center group">
                  <div className="bg-red-100 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl sm:text-4xl md:text-5xl">❤️</span>
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Customer Focus
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                    Your success is our top priority
                  </p>
                </div>

                <div className="text-center group my-4 sm:my-6">
                  <div className="bg-green-100 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl sm:text-3xl md:text-4xl">🤝</span>
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Collaboration
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Working together to achieve extraordinary results
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow-lg p-5 md:p-7">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-5 md:mb-6 text-center">
                Our Team
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto mb-6">
                We're a diverse team of designers, developers, and strategists
                passionate about creating amazing digital experiences. Together,
                we bring creativity, expertise, and dedication to every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-3">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-white">👨‍💼</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Leadership
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Visionary Leaders
                  </p>
                </div>

                <div className="text-center p-3">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-white">👨‍💻</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Developers
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Tech Innovators
                  </p>
                </div>

                <div className="text-center p-3 sm:col-span-2 lg:col-span-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-white">🎨</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Designers
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Creative Minds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
