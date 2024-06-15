import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import authService from "../appwrite/auth";
//for toast
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS


const Reset = () => {
  const location = useLocation(); // Use useLocation here instead of useHistory
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = async () => {
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");
    if (userId) {
      console.log("userId is ", userId);
    }
    if (secret) {
      console.log("secret is ", secret);
    }

    if (!userId || !secret) {
      // Handle missing userId or secret error
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const res = await authService.resetPassword(
        userId,
        secret,
        password,
        password
      );
      if (res) {
        setMessage(
          "Password reset successful. You can now login with your new password."
        );
        ToastService.success("Password reset successful.")
        // console.log("reset res is ", res);
      }
    } catch (error) {
      console.log("Error while resetting password:", error);
      setMessage(
        "An error occurred while resetting your password. Please try again later."
      );
      toast.error("An error occurred while resetting your password. Please try again later.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4 py-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          New Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Confirm New Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleResetPassword}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200">
        Reset Password
      </button>
      {message && <p className="text-green-800 mt-4">{message}</p>}

        {message && <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none transition-colors duration-200 m-2">
        Login
      </button>}

        {/* toast container  */}
      <ToastContainer/>
    </div>
  );
};

export default Reset;
