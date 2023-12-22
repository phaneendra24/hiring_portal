"use client";
import React, { FormEvent, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pwdstaus, setpwdstaus] = useState("");
  const router = useRouter();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

    const agg = await signIn("credentials", {
      email,
      password,
      redirect: false,
    }).then((e) => {
      console.log(e);
      if (e?.status == 401) {
        setpwdstaus("Invalid username or password");
      } else {
        setpwdstaus("");
        router.push("/");
      }
    });
  };
  return (
    <div className="wrapper  text-black h-[100vh] bg-white flex  gap-5 justify-center items-center">
      <div className="w-fit border-[1px] rounded-lg flex flex-col items-center gap-3 h-fit p-10">
        <h1 className="text-center font-bold">Sign in</h1>
        <form onSubmit={handleForm} className="form gap-5 flex flex-col">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            className="outline-none border-[1px] p-2 text-black rounded-md"
          />
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            className="outline-none border-[1px] text-black p-2 rounded-md"
            id="password"
            placeholder="password"
          />
          <span className="h-2 text-red-500 animate-bounce">{pwdstaus}</span>
          <button
            type="submit"
            className="p-2  bg-black text-white rounded-md"
            onClick={() => handleForm}
          >
            Sign in
          </button>
        </form>
        <Link href="/signup" className=" underline">
          singup
        </Link>
      </div>
    </div>
  );
}

export default Page;
