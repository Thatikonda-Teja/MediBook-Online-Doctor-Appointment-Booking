import { useState } from "react";
import AddInputValues from "./AddInputValues";
import { showError, showSuccess } from "../Toastify"
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    const [Name, setName] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate();
    const onNameChange = (event) => {
        const name = event.target.value;
        setName(name)
    }

    const onPasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password)
    }
    function onLogIn() {
        let user = localStorage.getItem('user')
        const obj = JSON.parse(user);
        console.log(obj)
        
        if ((Password !== obj.Password && Name !== obj.Name) && ((Password && Name) == "")) {
            showError("please enter correct user details")
            setName(" ")
            setPassword("")
        }
        else if (Password !== obj.Password) {
            showError("please enter correct user password")
            setPassword("")
        }
        else {
            navigate('/BookingAppointmentMessage')
            showSuccess("User Logged in Successfully")
        }
    }
    return (
        <div className="login">
            <h1 className="text-2x1 md:text-4xl font-bold text-sky-800 mb-5 text-center p-4">Login</h1>
            <form>
                <AddInputValues textLabel="Enter Name" inputType="text" inputId="name" inputValue={Name} onInputChange={onNameChange} />
                <AddInputValues textLabel="Enter Password" inputType="password" inputId="password" inputValue={Password} onInputChange={onPasswordChange} />
                <button type="button" className="text-xl md:text-2xl text-white rounded bg-sky-700 p-3 w-[100px] h-auto opacity-70" onClick={onLogIn}>Login</button>
            </form>
        </div>
    )
}