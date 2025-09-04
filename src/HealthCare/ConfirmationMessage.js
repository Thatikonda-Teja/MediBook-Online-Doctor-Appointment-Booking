
import React from "react"
import { useNavigate, useLocation } from "react-router-dom";
export default function ConfirmationMessage() {
    const navigate = useNavigate();
    const location = useLocation();
    const appointmentData = location.state; // Accessing passed state
    console.log(appointmentData)
    // console.log('DoctorName ', appointmentData.DoctorName)
    // console.log('PatientName', appointmentData.PatientName)
    // console.log('DateOfAppointment', appointmentData.DateOfAppointment)
    const handleConfirmation = () => {
        if ((appointmentData.DoctorName && appointmentData.PatientName && appointmentData.DateOfAppointment) !== "") {
            navigate("/BookingAppointmentMessage")
        }
    }
    return (
        <div className="confirmation flex flex-col justify-center align-center text-center">
            <h1 className="text-4x1 md:text-5xl font-bold text-sky-800 mb-4 text-center p-4">Appointment Confirmation</h1>

            <p className="text-2xl md:text-3xl font-semibold text-green-800 mb-4 opacity-70">Appointment booked succefully</p>
            <div className="w-full max-w-[500px] mx-auto text-left px-4">
                <p className="text-2xl md:text-3xl text-white mb-2 opacity-70  "> Patient: {appointmentData.PatientName ? appointmentData.PatientName : ''}</p>
                <p className="text-2xl md:text-3xl text-white mb-2  opacity-70 ">  Doctor: {appointmentData.DoctorName ? appointmentData.DoctorName : ''}</p>
                <p className="text-2xl md:text-3xl text-white mb-2 opacity-70 ">  Date:   {appointmentData.DateOfAppointment ? appointmentData.DateOfAppointment : ''}</p>
            </div>
            <div className="flex items-center justify-center ">
                <button onClick={handleConfirmation} className="text-xl md:text-2xl text-white rounded bg-sky-700 p-4 w-[400px] h-auto  mt-7 text-center opacity-70">Book Another Appointment</button>
            </div>
        </div>
    )
}
