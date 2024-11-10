import Input from "./../../../common/Input";
import React, { useState } from "react";
import Label from "./../../../common/Label";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("akezanna"); // Default username (can be updated via input)

  const [currentTab, setCurrentTab] = useState("LOGIN");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "username") setUsername(value);
  };

  const registerUser = async (username, email, password) => {
    try {
      const res = await axios.post("http://localhost:8080/register", {
        username: username,
        email: email,
        password: password,
      });
      console.log("RES : ", res);
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async (username, password) => {
    try {
      console.log(1337, username, password);

      const res = await axios.post(
        "http://localhost:8080/authenticate",
        { username, password },
        {
          withCredentials: true,
        }
      );

      console.log("RES", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      console.log(1337, username, password);
      const res = await axios.get("http://localhost:8080/users", {
        withCredentials: true,
      });
      console.log("USERs : ", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col  w-full">
      <h1 className=" flex justify-start m-0 w-full  text-2xl font-bold p-[32px] pb-0">
        Welcome Back! 🚀
      </h1>
      <p className=" flex justify-start m-0 w-full text-yellow-500 underline text-[13px] m-0 pl-[32px]">
        Enter Your Credentials
      </p>
      <form
        className="flex flex-col p-[32px] gap-4  w-full max-w-[375px] h-full"
        onSubmit={(e) => {
          e.preventDefault();
          if (currentTab === "REGISTER") {
            registerUser(username, email, password);
          } else {
            loginUser(username, password);
          }
        }}
      >
        <div className="flex justify-center items-center gap-4 underline">
          <span
            className="cursor-pointer"
            onClick={() => {
              setCurrentTab("LOGIN");
            }}
          >
            Login
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setCurrentTab("REGISTER");
            }}
          >
            Register
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <Label
            text={"Username:"}
            styleClass="text-md font-[500]"
            htmlFor="username"
          />
          <Input
            type="text"
            name="username"
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded-[6px] border outline-none shadow-none placeholder-gray-400"
            placeholder="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        {currentTab === "LOGIN" ? null : (
          <div className="flex flex-col gap-1">
            <Label
              text={"Email:"}
              styleClass="text-md font-[500]"
              htmlFor="email"
            />
            <Input
              type="email"
              name="email"
              styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded-[6px] border outline-none shadow-none placeholder-gray-400"
              placeholder="email"
              onChange={handleChange}
              value={email}
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <Label
            text={"Password:"}
            styleClass="text-md font-[500]"
            htmlFor="password"
          />
          <Input
            type="password"
            name="password"
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded-[5px] border outline-none shadow-none placeholder-gray-400"
            placeholder="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <button
          className="flex justify-center items-center pl-4 pr-4 h-10 rounded-[5px] w-full bg-yellow-500 text-md font-medium text-black"
          type="submit"
        >
          {currentTab === "LOGIN" ? "Login" : "Register"}
        </button>
      </form>

      <button
        onClick={() => {
          getUsers();
        }}
      >
        get users
      </button>
    </div>
  );
}

export default Login;
