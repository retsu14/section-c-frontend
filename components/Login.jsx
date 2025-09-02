"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL;

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/auth/login`, formData, {
        header: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    // parent div
    <div className="flex">
      {/* bsta */}
      <div className="w-full max-w-[550px]">
        <h2 className="text-[50px] text-blue-500 font-black">facebook</h2>
        <p className="text-[30px]">
          Connect with your friends and the world around you on Facebook.
        </p>
      </div>

      {/* form */}
      <div className="w-full max-w-[400px] bg-white p-5 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-[20px]">
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

          <button
            type="submit"
            disabled={loading}
            className={`h-[50px] text-center font-bold text-[16px] bg-blue-500 text-white w-full rounded-md ${
              loading ? "cursor-not-allowed bg-blue-300" : ""
            }`}
          >
            {loading ? "Logging in" : "Login"}
          </button>

          <div className="w-full text-center">or</div>

          <Link href={"/register"} className={``}>
            <div
              className={`flex items-center justify-center h-[50px] text-center font-bold text-[16px] bg-green-500 text-white w-full rounded-md`}
            >
              Register
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
