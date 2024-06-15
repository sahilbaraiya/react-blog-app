import React, { useState } from 'react';
import authService from '../appwrite/auth';

//for toast
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS

function Recover() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordRecovery =  async () => {
        try {
            authService.recovery1(email).then((res)=>{
                if(res){
                    console.log("recovery1 res is ",res);
                    toast.success("Email sent to your email id")
                    setMessage(res.message);
                }
            })
        } catch (error) {
            console.log('Error while sending password recovery email:', error);
            setMessage('An error occurred while sending the password recovery email. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 px-4 py-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Recover Password</h2>
            <p className="text-gray-700 mb-4">Enter your email address below to receive a password recovery link.</p>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                />
            </div>
            <button
                onClick={handlePasswordRecovery}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none active:bg-blue-950 transition-colors duration-300"
            >
                Send Recovery Email
            </button>
            {message && <p className="text-gray-700 mt-4">{message}</p>}

            <ToastContainer/>
        </div>
    );
}

export default Recover;
