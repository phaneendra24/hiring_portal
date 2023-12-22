"use client";
import { ref } from "firebase/database";
import { signOut, useSession } from "next-auth/react";

import Link from "next/link";
import { database } from "./firebase/config";
import Jobposting from "./components/Jobposting";
import Jobs from "./components/jobs";

export default function Home() {
  const session = useSession();

  // console.log(database);

  return (
    <main className="bg-white text-black flex min-h-screen flex-col items-center">
      <nav className="flex w-full h-20 bg-slate-100 justify-between  items-center px-10">
        <h1 className="text-3xl font-medium">Hiring Portal</h1>
        {session.status === "authenticated" ? (
          <button
            className="bg-blue-400  p-2 rounded-md"
            onClick={() => signOut()}
          >
            logout
          </button>
        ) : (
          <>
            <Link
              href="/signin"
              className="bg-white w-fit h-fit p-2 rounded-lg"
            >
              Login
            </Link>
          </>
        )}
      </nav>

      <div className="text-black flex w-full px-10  gap-10 mt-5">
        <Jobs />
        <Jobposting />
      </div>
    </main>
  );
}
