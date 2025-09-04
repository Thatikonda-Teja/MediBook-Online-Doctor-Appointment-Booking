
import { Link } from "react-router-dom";

export default function SuccessMessage() {
    return (
        <div className="success">
            <h1 className="text-2x1 md:text-4xl font-bold text-sky-800 mb-10">Registration Successful</h1>
            <p className="text-2xl text-white opacity-70">Thank You for registration. You can now <Link to="/LogIn" style={{ color: "rgb(36, 94, 136)", fontSize: 26, textDecoration: "none" }}>login</Link></p>
        </div>
    )
}