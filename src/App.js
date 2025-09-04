import React from "react"
import './App.css';
import RegisterForm from './HealthCare/RegisterForm';
import SuccessMessage from './HealthCare/SuccessMessage';
import LogIn from './HealthCare/LogIn';
import BookingAppointmentMessage from "./HealthCare/BookingAppointmentMessage";
import Appointment from "./HealthCare/Appointment";
import ConfirmationMessage from "./HealthCare/ConfirmationMessage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import  LandingPage  from "./HealthCare/LandingPage";
function App() {
  return (
    <div className="App">
        <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/registerform" element={<RegisterForm />} />
          <Route path="/successMessage" element={<SuccessMessage />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/BookingAppointmentMessage" element={<BookingAppointmentMessage />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/ConfirmationMessage" element={<ConfirmationMessage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
