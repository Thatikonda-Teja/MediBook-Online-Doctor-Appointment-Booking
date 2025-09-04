import { useState } from "react";
import AddInputValues from "./AddInputValues";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../Toastify";

export default function Appointment() {

  const [DoctorName, setDoctorName] = useState('')
  const [PatientName, setPatientName] = useState('')
  const [DateOfAppointment, setDateOfAppointment] = useState('')

  const onDoctorNameChange = (event) => {
    const doctorName = event.target.value;
    setDoctorName(doctorName)
  }

  const onPatientNameChange = (event) => {
    const PatientName = event.target.value;
    setPatientName(PatientName)
  }

  const onDateOfAppointmentChange = (event) => {
    const AppointmentDate = event.target.value;
    setDateOfAppointment(AppointmentDate)
  }

  const navigate = useNavigate();
  function handleAppointmentDetails() {
    if (
      DoctorName.trim() !== "" &&
      PatientName.trim() !== "" &&
      DateOfAppointment.trim() !== ""
    ) {
      const appointment = {
        DoctorName,
        PatientName,
        DateOfAppointment,
      };
      let user = localStorage.setItem("appointment", JSON.stringify(appointment));
      console.log(user)
      navigate("/ConfirmationMessage", { state: appointment });
      showSuccess(`Your Appointment Booked With ${DoctorName}`);
    } else {
      showError("Please fill all the appointment details.");
    }
  }
  console.log(DoctorName)
  return (
    <div className="appointment">
      <h1 className="text-2x1 md:text-4xl font-bold text-sky-800 mb-5 text-center p-4">Booking An Appointment</h1>
      <form>
        <label htmlFor="doctoraName">Choose a Doctor:</label><br></br>
        <select id="doctorName" onChange={onDoctorNameChange}>
          <option value="Dr.Smith-Cardialogist">Dr.Smith - Cardiologist</option>
          <option value="Dr.John-Dermatologist">Dr.John - Dermatologist</option>
          <option value="Dr.Robert-Pediatrician">Dr.Robert - Pediatrician</option>
          <option value="Dr.Travis-Surgeon">Dr.Travis - Surgeon</option>
          <option value="Dr.Monalisa-Gynacologist">Dr.Monalisa - Gynacologist</option>
        </select>

        <AddInputValues textLabel="Enter PatientName" inputType="text" inputId="patientName" inputValue={PatientName} onInputChange={onPatientNameChange} />
        <AddInputValues textLabel="Enter Date of Appointment" inputType="date" inputId="appointmentDate" inputValue={DateOfAppointment} onInputChange={onDateOfAppointmentChange} />
        <button onClick={handleAppointmentDetails} type="button" className="text-xl md:text-2xl text-white rounded bg-sky-700 p-2 w-[300px] h-auto opacity-70">Book Appointment</button>
      </form>
    </div>
  )
}