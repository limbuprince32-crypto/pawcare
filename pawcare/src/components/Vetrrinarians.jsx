import vet1 from "../assets/vet1.png";
import vet2 from "../assets/vet2.png";
import vet3 from "../assets/vet3.png";
const cards = [
  {
    img: vet1,
    title: "Surgery Care",
    desc: "From minor procedures to advanced surgeries with expert care.Our team ensures safe anesthesia and post-operative monitoring.We prioritize your pet’s comfort and recovery.",
  },
  {
    img: vet2,
    title: "Vaccinations",
    desc: "Protect your pets from dangerous and contagious diseases.We follow recommended vaccination schedules for all life stages.Safe, quick, and essential for your pet’s long-term health.",
  },
  {
    img: vet3,
    title: "General Health Check-up",
    desc: "Routine exams help monitor your pet’s overall health and detect issues early.Our veterinarians assess weight, behavior, and vital signs carefully.Regular visits ensure a longer, healthier life for your pet.",
  },
];
const Vetrrinarians = () => {
  return (
    <section id="veterinarians" className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Veterinary <span className="text-gray-900">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive veterinary services to keep your pets
            healthy and happy. From routine checkups to advanced treatments, our
            experts ensure the best care. Your pet’s well-being is our priority
            at every stage of life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl w-80 flex flex-col items-center shadow-lg transform 
                transition duration-300 hover:translate-y-3 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-80 h-72 object-cover shadow-2xl rounded-4xl mb-6 transition-transform duration-300 hover:scale-105"
              />
              <button
                className="bg-linear-to-r from-green-600 to-green-500 text-white px-6 py-3 
              rounded-2xl font-medium flex items-center gap-2 relative -top-10 transform transition duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1"
              >
                Click Here
              </button>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="mr-4 text-sm text-gray-600 mb-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vetrrinarians;
