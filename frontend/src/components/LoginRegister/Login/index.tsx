import Input from "./../../../common/Input";
import React, { useState } from "react";
import Label from "./../../../common/Label";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  console.log(password);
  return (
    <div>
      <form className="flex flex-col flex-start p-2 bg-gray-100 w-80">
        <div className="flex flex-col gap-1">
          <Label
            text={"email :"}
            styleClass="text-md font-medium"
            htmlFor="email"
          />
          <Input
            type="email"
            name="email"
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded border outline-none shadow-none placeholder-gray-400"
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
            styleClass="h-10 text-md pl-2 pr-2 w-full border-1 border-gray-200 rounded border outline-none shadow-none placeholder-gray-400"
            placeholder="password"
            onChange={handleChange}
            value={password}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
