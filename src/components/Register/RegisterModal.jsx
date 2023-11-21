import axios from "axios";
//import jwt from 'jsonwebtoken';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function RegisterModal({ showModal, setShowModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = { firstName, lastName, email, mobileNumber, password, role};
  //   localStorage.setItem("userData", JSON.stringify(data));
  //   toast.success("You are successfully registered. Kindly login.");
  // };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:5046/api/Users', {
  //       FirstName: firstName,
  //       LastName: lastName,
  //       EmailAddress: email,
  //       MobileNumber: mobileNumber,
  //       Password: password,
  //       Role: role
  //     });
  //     console.log('Data successfully updated in the database');
  //   } catch (error) {
  //     console.error('Error:', error.response.status, error.response.statusText, error.response.data);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5046/api/Users", {
        FirstName: firstName,
        LastName: lastName,
        EmailAddress: email,
        MobileNumber: mobileNumber,
        Password: password,
        Role: role,
      });
      const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiJlOWE2NzYwYS05ZDk0LTQ5MGYtOGVlMi04ZDJkMWExZDU1MTUiLCJpYXQiOiIxMS8xNS8yMDIzIDQ6Mzk6MDUgQU0iLCJVc2VySWQiOiI1IiwiRmlyc3ROYW1lIjoiYmIiLCJMYXN0TmFtZSI6ImxrIiwiRW1haWxBZGRyZXNzIjoiYmJAZ21haWwuY29tIiwiTW9iaWxlTnVtYmVyIjoiNTQ2Nzg3OTgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsImV4cCI6MTcwMDAyMzc0NSwiaXNzIjoiSldUQXV0aGVudGljYXRpb25TZXJ2ZXIiLCJhdWQiOiJKV1RTZXJ2aWNlUG9zdG1hbkNsaWVudCJ9.SqSpVqxJvWev4Jua5IoEQ7Nrdm4wPOcGhImVIJo9JkU
      `;
      localStorage.setItem("token", token);

      console.log("Data successfully updated in the database");
      toast.success('You have been registered. Thanks!');
    } catch (error) {
      console.error(
        "Error:",
        error.response.status,
        error.response.statusText,
        error.response.data
      );
      toast.error("An error occurred while registering.");
    }
  };

  if (!showModal) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <ToastContainer />
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          {" "}
          ​
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ">
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-[#f7e4cd]">
            <div className="sm:flex sm:items-start ">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Registration
                </h3>
                <div className="mt-2 ">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="tel"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="role"
                      placeholder="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      onClick={() => {
                        toast.success("You have been registered. Thanks!");
                        // Add your form submission logic here
                      }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
