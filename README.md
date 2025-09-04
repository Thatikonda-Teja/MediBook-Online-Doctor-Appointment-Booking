🏥 MediBook - Doctor Appointment Booking

MediBook is a doctor appointment booking system built with React, TailwindCSS, and React Router.
It allows patients to register, login, book appointments with doctors, and view confirmations — all in a simple, responsive UI.

✨ Features

🔐 User Authentication – Register & Login system

📅 Book Appointments – Choose doctor, patient name, and appointment date

✅ Confirmation Page – Displays appointment details after booking

📲 Responsive UI – Works on desktop and mobile (TailwindCSS)

🔔 Toast Notifications – Using react-toastify for better UX

🛠️ Tech Stack

Frontend: React 19, React Router v7, TailwindCSS

UI Components: TailwindCSS utility classes

Notifications: React-Toastify

Build Tool: React Scripts (CRA)

🚀 Installation

Clone the repository:

git clone https://github.com/yourusername/medibook-doctor-appointment.git
cd medibook-doctor-appointment


Install dependencies:

npm install


Run the project locally:

npm start


Build for production:

npm run build

📸 Screenshots
🏠 Landing Page

📝 Registration

✅ Registration Success

🔑 Login

👨‍⚕️ Dashboard (After Login)

📅 Book Appointment

✅ Appointment Confirmation

📂 Folder Structure
medibook-doctor-appointment/
│── public/          # Static files
│── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Pages (Login, Register, Booking, etc.)
│   ├── App.js       # Main App entry
│   ├── index.js     # React entry point
│── package.json     # Dependencies & scripts
│── tailwind.config.js
│── README.md

🙌 Future Improvements

Add backend (Node.js/Express + MongoDB) for persistent data

Email/SMS reminders for booked appointments

Doctor-side dashboard for managing schedules

👨‍💻 Author

Developed with ❤️ by Teja Thatikonda