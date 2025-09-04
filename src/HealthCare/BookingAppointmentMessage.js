
import { Link } from "react-router-dom";
export default function BookingAppointmentMessage() {
    return (
        <div className="booking flex flex-col justify-center text-center  ">
            <h1 className="text-3x1 md:text-5xl font-bold text-sky-800 mb-5 text-center pb-4">Welcome to Online Doctor Consultation</h1>
            <p className="text-2xl md:text-3xl text-white opacity-70" >Logged in successfully</p>

            <div className="flex items-center justify-center ">
            <Link to="/Appointment" className="text-xl md:text-2xl text-white rounded bg-sky-700 p-4 w-[250px] h-auto  mt-7  opacity-70  "> Book Appointment</Link>
            </div>
        </div>
    )
}