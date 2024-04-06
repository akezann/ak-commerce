import Input from "./../../../common/Input";
import React, { useState } from "react";
import Label from "./../../../common/Label";
import Button from "../../../common/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  console.log(password);
  return (
    <div className="flex flex-col items-center w-full">
      <form className="flex flex-col p-[16px] gap-4 p-2 w-full max-w-[375px] h-full">
        <div className="flex flex-col gap-1">
          <Label
            text={"email :"}
            styleClass="text-md font-medium"
            htmlFor="email"
          />
          <Input
            type="email"
            name="email"
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded-full border outline-none shadow-none placeholder-gray-400"
            placeholder="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            text={"password :"}
            styleClass="text-md font-medium"
            htmlFor="password"
          />
          <Input
            type="password"
            name="password"
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded-full border outline-none shadow-none placeholder-gray-400"
            placeholder="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <Button
          styleClass="flex justify-center items-center pl-4 pr-4 h-10 rounded-full w-full bg-yellow-400 text-md font-medium text-black"
          onClick={() => {}}
          buttonText="Login"
        />
      </form>
    </div>
  );
}

export default Login;
