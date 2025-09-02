"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/auth/register`, formData, {
        header: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // parent div
    <div className="flex">
      {/* bsta */}
      <div className="w-full max-w-[550px] flex flex-col justify-center">
        <h2 className="text-[50px] text-blue-500 font-black">facebook</h2>
        <p className="text-[30px]">
          Connect with your friends and the world around you on Facebook.
        </p>
      </div>

      {/* form */}
      <div className="w-full max-w-[400px] bg-white p-5 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-[20px]">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={onChange}
            className="h-[50px] w-full border border-gray-300 rounded-md focus:outline-none px-[16px] py-[14px]"
          />
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={formData.firstname}
            onChange={onChange}
            className="h-[50px] w-full border border-gray-300 rounded-md focus:outline-none px-[16px] py-[14px]"
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={formData.lastname}
            onChange={onChange}
            className="h-[50px] w-full border border-gray-300 rounded-md focus:outline-none px-[16px] py-[14px]"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="h-[50px] w-full border border-gray-300 rounded-md focus:outline-none px-[16px] py-[14px]"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className="h-[50px] w-full border border-gray-300 rounded-md focus:outline-none px-[16px] py-[14px]"
          />
          <button className="h-[50px] text-center font-bold text-[16px] bg-green-500 text-white w-full rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
