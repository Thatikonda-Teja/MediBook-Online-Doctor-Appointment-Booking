import landingImg from "../assets/landing.jpg"
import { useNavigate } from "react-router-dom";

export default function LandingPage() {

  const navigate = useNavigate()
  function navigateToRegistration() {
    navigate("./registerform")
  }
  console.log("Routes are working, current path:", window.location.pathname);
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${landingImg})`,  
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "100vh",           
        width: "100%",
        opacity: 0.69,
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue-600 bg-opacity-40"></div>
      <div className="relative flex flex-col items-center justify-center text-center text-white p-8 ">

        <h1 className="text-4xl md:text-6xl font-bold mb-10 mt-10 text-white shadow-sm">
          Online Doctor Consultation
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-sky-700">
          Your Health, Our Priority
        </h2>

        <p className="text-lg md:text-2xl mb-8 mt-6 ">
          Consult a Doctor Online — Secure, Quick, and Real-time
        </p>

        <p className="text-lg md:text-2xl mb-8 mt-6 ">Book your appointment easily from home.</p>
        <button type="button" onClick={navigateToRegistration} className="bg-white text-sky-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition" >
          Book Appointment
        </button>
      </div>
    </div>
  );
}


