import bg from "../assets/bg.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute -top-32 left-0 right-0 bottom-0 -z-10">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>
      <section
        className="relative lg:min-h-screen flex flex-col items-center 
      justify-center text-center px-6 overflow-hidden lg:pt-20"
      >
        <div
          className="flex items-center gap-2 px-4 p-2 rounded-full shadow text-sm mb-6 mt-9 bg-white"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="flex -space-x-2">
            <img
              src={p1}
              alt="user1"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src={p2}
              alt="user2"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
            <img
              src={p3}
              alt="user32"
              className="w-6 h-6 rounded-full border-2 border-white object-cover"
            />
          </div>
          <span className="text-gray-600">
            <span className="text-emerald-600 font-semibold">5000+</span> Happy
            Pet Owners
          </span>
        </div>
        <h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-green-600">Caring </span>For Your Pets <br />
          Like<span className="text-green-600"> Family</span>
        </h1>
        <p
          className="mt-4 max-w-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Expert Veterinary care with compassion and precision for your pets.
        </p>
        <div
          className="mt-8 flex flex-col items-center gap-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="px-8 py-3 rounded-full bg-emerald-700 text-white shadow-2xl hover:bg-green-600 transition cursor-pointer font-semibold">
            Get Appointment
          </button>
        </div>
        <div
          className="mt-10 w-full max-w-4xl relative"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img
            src={hero}
            alt="Hero"
            className="w-220 lg:h-120 rounded-2xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
