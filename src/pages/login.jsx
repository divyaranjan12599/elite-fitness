// Login.js
import React, { useContext, useEffect, useState } from "react";
// import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { storeIsSession } from "./session";
import axios from "axios";
import toast from "react-hot-toast";
// import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  let {
    userAuth,
    userAuth: { token },
    setUserAuth,
  } = useContext(UserContext);
  // const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:4000" + "/user/login", {
        email,
        password,
      })
      .then(({ data }) => {
        storeIsSession("user", JSON.stringify(data));
        setUserAuth(data);
        if (data.token) {
          toast.success("Login Successful");
          navigate("/");
        }
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  // console.log("first", userAuth)

  return (
    <div class="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <h2 class="text-2xl text-sky-900 font-bold mb-6">Login</h2>

      <form method="post" action="#">
        <div class="mb-4" id="formEmail">
          <label
            className="block text-sm font-medium text-gray-600"
            for="email"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="mb-4" id="formPassword">
          <label
            className="block text-sm font-medium text-gray-600"
            for="password"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <div class="flex justify-end">
          <button
            class="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
