//************************************************** */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import authService from "../appwrite/auth";
//for toast
import {toast,ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS



const Profile = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    // Initialize input fields with existing user details
    if (userData) {
      setNewName(userData.name);
      setNewEmail(userData.email);
    }
  }, [userData]);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };


  //for name only
const handleUpdateName = async () => {
    setIsUpdating(true);
    
try {
    authService.updateName(newName).then((res)=>{
        // console.log(" res for name is ",res);
        if(res){
            // console.log("res.name is ",res.name);
            toast.success("Your Name is Updated")
        }
    })
    setIsUpdating(false);
} catch (error) {
    console.error("Error updating name:", error);
    setIsUpdating(false);
    toast.error("error while updating name")
      
}

};


//for email and password
  const handleUpdateEmailPassword = async () => {
    setIsUpdating(true);
    
////////////////////////////////////////////////////////////////////////

try {
    authService.updateEmail(newEmail,newPassword).then((res)=>{
        // console.log("email,password res is ",res);
        if(res){
            // console.log("email is ",res.email);
            toast.success("Your Email is Updated")  
          }
    })
        setIsUpdating(false);
} catch (error) {
    console.error("Error while updating email and password:", error);
    setIsUpdating(false)
    toast.error("error while updating name")

}

};



  return (

      <>
    {/* for showing current name and email */}
<div className="bg-gray-200 p-6 rounded-md shadow-lg mx-4 my-6 md:mx-auto md:w-2/3 lg:w-1/2 xl:w-1/3">
  <p className="text-gray-800 text-2xl font-semibold mb-4">My Profile</p>
  <div className="flex flex-col space-y-2">
    <div className="bg-gray-100 py-2 px-4 rounded">
      <span className="text-gray-700 font-semibold">Name:</span> {userData?.name}
    </div>
    <div className="bg-gray-100 py-2 px-4 rounded">
      <span className="text-gray-700 font-semibold">Email:</span> {userData?.email}
    </div>
  </div>
</div>

 {/* update from here */}

<div className="py-8">
  <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-md p-6">
    <h2 className="text-2xl font-bold mb-4">Update My Profile</h2>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Update Name:</label>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={newName}
        onChange={handleNameChange}
      />
    </div>
    <div className="flex justify-end">
      <button
        onClick={handleUpdateName}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded active:bg-blue-900 transition-colors duration-300"
        disabled={isUpdating}
      >
        {isUpdating ? "Updating Name..." : "Update Name"}
      </button>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Update Email:</label>
      <input
        type="email"
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={newEmail}
        onChange={handleEmailChange}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Enter Current Password for Confirmation:</label>
      <input
        type="password"
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
        value={newPassword}
        onChange={handlePasswordChange}
      />
    </div>
    <div className="flex justify-end">
      <button
        onClick={handleUpdateEmailPassword}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded active:bg-blue-900 transition-colors duration-300"
        disabled={isUpdating}
      >
        {isUpdating ? "Updating Email..." : "Update Email"}
      </button>
    </div>
  </div>
      <ToastContainer/>
</div>


</>




  );
};

export default Profile;













/*
input
newname
setnewname usestate
newname->update name fnction

*/ 