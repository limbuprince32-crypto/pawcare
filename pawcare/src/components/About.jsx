import about from "../assets/about.png";
const About = () => {
  return (
    <section id="about" className="w-full overflow-hidden bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
        <div
          className="relative flex justify-center"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="w-64 h-64 sm:w-80 md:w-96 md:h-96 lg:w-120 lg:h-125 overflow-hidden border-2 border-green-500 shadow-lg rounded-[60%_50%_30%_20%/60%_30%_50%_30%] relative z-0">
            <img
              src={about}
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
          <div
            className="absolute -top-6 -right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg font-semibold"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            15+ Years Experience
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <p className="text-green-600 text-4xl font-semibold mb-3">About Us</p>
          <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-6">
            15 Years of Excellence in <br /> Veterinary Care
          </h2>
          <p className="text-gray-600 mb-6">
            At PawCare, we are dedicated to providing compassionate and
            professional care for your beloved pets. Our team of experienced
            veterinarians ensures the highest standards of treatment, from
            routine checkups to advanced medical services. We believe every pet
            deserves a healthy, happy life, and we are here to support them at
            every stage.
          </p>
          <ul className="space-y-4 mb-8">
            <li
              className="flex items-center gap-3 text-gray-700"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Comprehensive Pet Health Checkups
            </li>
            <li
              className="flex items-center gap-3 text-gray-700"
              data-aos="fade-left"
              data-aos-delay="290"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Advanced Surgical & Emergency Care
            </li>
            <li
              className="flex items-center gap-3 text-gray-700"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Friendly & Experienced Veterinary Team
            </li>
          </ul>
          <button
            className="bg-emerald-500 hover:bg-green-400 text-white px-8 py-3 rounded-full font-medium transition cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
