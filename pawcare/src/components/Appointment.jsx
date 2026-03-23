import { useState } from "react";
import app from "../assets/app.png";
import { PawPrint, Heart, User, Phone, MessageSquare } from "lucide-react";
const Appointment = () => {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "dog",
    ownerName: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Succesfully!");
  };
  return (
    <div
      id="appointment"
      className="min-h-screen flex items-center justify-center p-4 mt-16"
    >
      <div className="max-w-5xl w-full bg-gray-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div
          className="md:w-5/12 relative overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src={app}
            alt="cute Randa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative h-full flex flex-col justify-end p-8 bg-linear-to-t from-green-700/40 to-transparent text-white">
            <h2 className="text-4xl font-bold mb-2">Join Our Family</h2>
            <p className="text-green-100 italic">
              Join our PawCare family by booking an appointment today. Our
              compassionate team is dedicated to providing personalized care,
              gentle handling, and expert attention to every pet, ensuring they
              feel comfortable, loved, and well cared for.
            </p>
            <div className="mt-6 flex gap-4 text-sm font-medium">
              <span
                className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Heart size={14} className="fill-white" />
                Professional Care
              </span>
              <span
                className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <PawPrint size={14} /> 24/7 Support
              </span>
            </div>
          </div>
        </div>
        <div
          className="md:w-7/12 p-8 lg:p-12"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Book an <span className="text-green-400">Appointment</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Easily book your pet’s appointment at PawCare. We provide gentle,
              expert care tailored to your pet.
            </p>
          </header>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-dealy="150"
              >
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <PawPrint size={16} className="text-green-600" />
                </label>
                <input
                  required
                  name="petName"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 
                focus:bg-white outline-none transition-all"
                  placeholder="e.g. Max"
                  onChange={handleChange}
                />
              </div>
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-dealy="200"
              >
                <label className="text-sm font-bold text-gray-700">
                  Pet Type
                </label>
                <select
                  name="petType"
                  className="w-full px-4 py-3 bg-gray-50 border 
                border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all
                "
                  onChange={handleChange}
                >
                  <option value="dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Cow">Cow</option>
                  <option value="Buffalo">Buffalo</option>
                  <option value="leviathan">Leviathan</option>
                </select>
              </div>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-dealy="200"
              >
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <User size={16} className="text-emerald-600" />
                  Owner Name
                </label>
                <input
                  required
                  name="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                  onChange={handleChange}
                />
              </div>
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-green-600" />
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all"
                  placeholder="555-555-555"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <label className="text-sm font-bold text-gray-700">Date</label>
                <input
                  required
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={handleChange}
                />
              </div>
              <div
                className="space-y-1"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <label className="text-sm font-bold text-gray-700">Time</label>
                <input
                  required
                  type="time"
                  name="time"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-green-500 outline-none"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-1" data-aos="fade-up" data-aos-delay="350">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <MessageSquare size={16} className="text-green-600" />
                Reason for Visit
              </label>
              <textarea
                name="notes"
                rows="2"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl 
                focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Briefly describe the issue......"
                onChange={handleChange}
              />
            </div>
            <button
              type="Submit"
              className="w-full bg-emerald-700 py-4 hover:bg-green-800 text-white font-bold 
            rounded-xl shadow-lg shadow-green-100 transition duration-300 transform hover:-translate-y-1 
            active:scale-95 flex items-center justify-center gap-2
            "
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
