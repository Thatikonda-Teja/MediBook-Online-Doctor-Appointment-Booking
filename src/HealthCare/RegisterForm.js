import './Style.css'
import { useState } from "react";
import { showError, showSuccess } from '../Toastify';
import AddInputValues from "./AddInputValues";
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const navigate = useNavigate();
  const onNameChange = (event) => {
    const name = event.target.value;
    setName(name)
  }

  const onEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email)
  }

  const onPasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password)
  }

  // Simple email regex
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Password: min 6 chars, must contain letters & numbers
  const validatePassword = (password) =>
    password.length >= 6 && /[A-Za-z]/.test(password) && /\d/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Email) {
      showError("Email is required ❌");
      return; // stop the function here
    }
    if (!validateEmail(Email)) {
      showError("Invalid email format ❌");
      return;
    }
    if (!Password) {
      showError("Password is required ❌");
      return;
    }
    if (!validatePassword(Password)) {
      showError("Password must be at least 6 characters and contain letters & numbers ❌");
      return;
    }

    // If valid
    showSuccess("✅ Login successful!");
    let user = localStorage.setItem('user', JSON.stringify({ Name, Password, Email }));
    console.log(user) //it shows undefined bcz  localStorage.setItem does not return anything.
    navigate('/SuccessMessage')
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h1 className="text-2x1 md:text-4xl font-bold text-sky-800 mb-5 text-center p-4">User Registration</h1>
      <form>
        <AddInputValues textLabel="Enter Name" inputType="text" inputId="name" inputValue={Name} onInputChange={onNameChange} />
        <AddInputValues textLabel="Enter Email" inputType="email" inputId="email" inputValue={Email} onInputChange={onEmailChange} />
        <AddInputValues textLabel="Enter Password" inputType="password" inputId="password" inputValue={Password} onInputChange={onPasswordChange} />

        <button type="submit" className="text-xl md:text-2xl text-white rounded bg-sky-700 p-2 w-[150px] h-auto opacity-70">Register</button>
      </form>
    </div>
  )
}