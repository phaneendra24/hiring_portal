"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

import signUp from "@/app/firebase/auth/Singup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const signup = await createUserWithEmailAndPassword(auth, email, password);
    return router.push("/");
  };
  return (
    <div className="wrapper h-[100vh] flex  gap-5 justify-center items-center">
      <div className="w-fit h-fit p-10 border-white border-[1px]">
        <h1 className="text-center font-bold">Sign up</h1>
        <form onSubmit={handleForm} className="form gap-5 flex flex-col">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="outline-none p-2 text-black rounded-md"
          />
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            className="outline-none text-black p-2 rounded-md"
            id="password"
            placeholder="password"
          />
          <button
            type="submit"
            className="p-2  bg-white text-black rounded-md"
            onClick={() => handleForm}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
