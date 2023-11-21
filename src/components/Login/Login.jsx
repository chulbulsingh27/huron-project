
import React, { useState } from "react";
import './Login.css'
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
      axios
      .get("http://localhost:5046/api/users/"+response.data.id)
      .then((result) => {
        localStorage.setItem('userInfo',JSON.stringify(result.data));
        console.log(JSON.parse(localStorage.getItem('userInfo')))
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
      const token = response.data.eToken;
      
      localStorage.setItem('user',response.data.user);
      localStorage.setItem('loggedIn',1);
      localStorage.setItem('userId',response.data.id);
      console.log(localStorage.getItem('loggedIn'))
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
    <div className="min-h-screen flex items-center justify-center  py-8 px-4 sm:px-6 lg:px-8 bg-wood-texture" style={{backgroundImage:"https://e1.pxfuel.com/desktop-wallpaper/721/613/desktop-wallpaper-abstract-login-page.jpg"}}>
      {isLoggedIn ? (
        <Home/>    
      ) : (
        <div className="max-w-md w-[900px] h-[300px] p-4 m-4 space-y-8  rounded-lg bg-[#f7e4cd]">
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


