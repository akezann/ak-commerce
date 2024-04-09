import Input from "./../../../common/Input";
import React, { useState } from "react";
import Label from "./../../../common/Label";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  console.log(password);
  return (
    <div className="flex flex-col  w-full">
      <h1 className=" flex justify-start m-0 w-full  text-2xl font-bold p-[32px] pb-0">
        Welcome Back! 🚀
      </h1>
      <p className=" flex justify-start m-0 w-full text-yellow-500 underline text-[13px] m-0 pl-[32px]">
        Enter Your Credentials
      </p>
      <form className="flex flex-col p-[32px] gap-4  w-full max-w-[375px] h-full">
        <div className="flex flex-col gap-1">
          <Label
            text={"email :"}
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
        <div className="flex flex-col gap-1">
          <Label
            text={"password :"}
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
          <Link
            to="/"
            className=" flex justify-end cursor-pointer m-0 w-full text-black-400 underline text-[13px] m-0 pl-[32px]"
          >
            Forget password?
          </Link>
        </div>
        <Button
          styleClass="flex justify-center items-center pl-4 pr-4 h-10 rounded-[5px] w-full bg-yellow-500 text-md font-medium text-black"
          onClick={() => {}}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
