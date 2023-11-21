import axios from "axios";
//import jwt from 'jsonwebtoken';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function UserInfoModal({ showUser, setShowUser }) {
  console.log(
    "http://localhost:5046/api/users/1" + localStorage.getItem("userId")
  );
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  // console.log(data.firstName);
  const getData = () => {
    console.log("get data is being exe");
    axios
      .get("http://localhost:5046/api/products")
      .then((result) => {
        setData(result.data);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(getData);
  const [firstName, setFirstName] = useState(data.firstName);
  console.log(data);
  console.log(localStorage.getItem("userId"));
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.emailAddress);
  const [mobileNumber, setMobileNumber] = useState(data.mobileNumber);
  const [password, setPassword] = useState(data.password);
  const [role, setRole] = useState(data.role);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5046/api/Users/" + localStorage.getItem("userId"),
        {
          userId: localStorage.getItem("userId"),
          FirstName: firstName,
          LastName: lastName,
          EmailAddress: email,
          MobileNumber: mobileNumber,
          Password: password,
          Role: role,
        }
      );

      console.log("Data successfully updated in the database");
      toast.success("Your Data Have been Updated. Thanks!");
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
  if (!showUser) return null;
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
        </span>
        <div className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full bg-white">
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-[#f7e4cd]">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-xl leading-6  text-gray-900 text-center font-bold"
                  id="modal-title"
                >
                  Update User Info
                </h3>
                <div className="mt-2">
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
                      type="role"
                      placeholder="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                   
                    <div className="mb-4 flex items-center justify-between">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => {
                          localStorage.setItem("loggedIn", 2);
                          setShowUser(false);
                        }}
                      >
                        Log Out
                      </button>

                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                        onClick={() => {
                          toast.success("You have been registered. Thanks!");
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => setShowUser(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-end rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
