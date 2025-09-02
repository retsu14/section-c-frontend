"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}/api/auth/logout`,
        {},
        {
          header: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="h-[50px] bg-blue-500 text-white rounded-md w-[300px]"
    >
      Logout
    </button>
  );
};

export default Logout;
