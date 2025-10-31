import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiInfo } from "react-icons/fi";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent flicker + faster load perceived
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const demoEmail = "admin@adminify360.com";
    const demoPassword = "admin123";

    if (email === demoEmail && password === demoPassword) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    } else {
      alert("Invalid login details");
    }
  };

  return (
    <div className={`h-screen w-full flex items-center justify-center 
      bg-gradient-to-br from-sky-200 to-white transition-opacity duration-300
      ${mounted ? "opacity-100" : "opacity-0"}
    `}>
      <div className="bg-blue-900/20 border border-white/30 shadow-xl rounded-xl p-10 w-[90%] max-w-md text-center backdrop-blur-sm">

        <h1 className="text-3xl font-extrabold mb-6 tracking-wide text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Adminify360
          </span>
        </h1>

        <form className="space-y-5" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-lg bg-white/10 text-black placeholder-black-200 
            border border-white/30 focus:outline-none focus:border-sky-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-white/10 text-black placeholder-black-200 
              border border-white/30 focus:outline-none focus:border-sky-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="absolute right-4 top-3 text-black text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-black 
            py-3 rounded-lg shadow-md hover:opacity-90 font-semibold transition-all"
          >
            Login
          </button>
        </form>

        <button
          className="flex items-center gap-2 text-sm text-black mt-4 opacity-90 hover:opacity-100"
          onClick={() => setShowDemo(!showDemo)}
        >
          <FiInfo /> Demo Login Info
        </button>

        {showDemo && (
          <div className="mt-2 bg-white/10 p-3 rounded-md border border-white/30 text-xs text-black">
            Email: admin@adminify360.com <br />
            Password: admin123
          </div>
        )}

        <p className="text-black-200 mt-6 text-xs">
          © 2024 <span className="font-semibold">Adminify360</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
