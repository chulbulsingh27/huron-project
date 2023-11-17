import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import CardData from "../Home/CardData";
import Home from "../Home/Home";
import App from "../../App";
export default function Login({ showModal, setShowModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5046/api/Login',
  //       {
  //         emailAddress: email,
  //         password: password,
  //       }
  //       // {
  //       //   headers: {
  //       //     Authorization: 'Bearer ' + jwttoken,
  //       //   },
  //       // }
  //     );
  //     const token = response.data.eToken;
  //     //console.log(token);   
  //     if (token) {
  //       localStorage.setItem('token', token);
  //       // localStorage.getItem(token);     
  //       setIsLoggedIn(true);
  //       //console.log(token);
  //       toast.success("You are successfully logged in. Token is generated.");
  //     } else {
  //       toast.error("Logged in but no token received.");
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 400 && error.response.data.errors) {
  //       setErrors(error.response.data.errors);
  //     } else {
  //       console.error('Error logging in', error);
  //       toast.error("Invalid email or password.");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5046/api/Login',
        {
          emailAddress: email,
          password: password,
        }
      );
      const token = response.data.eToken;
      if (token) {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        toast.success("You are successfully logged in. Token is generated.");
      } else {
        toast.error("Logged in but no token received.");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid email or password.");
      } else {
        console.error('Error logging in', error);
        toast.error("An error occurred while logging in.");
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {isLoggedIn ? (
        <Home/>    
      ) : (
        <div className="max-w-md w-[600px] space-y-8  border-2 border-black rounded-lg">
          <div>
            <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input id="email-address" name="email"type="email"
                  autoComplete="email" required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {errors && (
              <div className="text-red-500">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}