import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/home"); 
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err) {
      setError("Error during login. Please check your credentials.");
    }
  };

  return (
      <div className="  w-full 
    h-[100vh] flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-[80px] text-orange-300">Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
          className="p-2 border-2 border-gray-300"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col">
          <input
          className="p-2 border-2 border-gray-300"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit" className="p-3 border-2 hover:bg-orange-300 hover:text-white transition-all">Login</button>
      </form>
    </div>
  );
};

export default Login;
