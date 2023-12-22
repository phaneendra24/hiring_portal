"use client";

import { Firestore, addDoc, collection } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { database } from "../firebase/config";

export default function Jobposting() {
  const [jobname, setjobname] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const addjob = async (e: FormEvent) => {
    e.preventDefault();
    console.log(jobname, description, requirements);
    await addDoc(collection(database, "jobs"), {
      jobname: jobname,
      description: description,
      requirements: requirements,
    }).then(() => {
      setjobname("");
      setDescription("");
      setRequirements("");
    });
  };

  return (
    <div className="bg-slate-100 p-5 w-1/3 rounded-lg">
      <form className="flex flex-col gap-5" onSubmit={(e) => addjob(e)}>
        <label htmlFor="jobname">Jobname</label>
        <input
          id="jobname"
          value={jobname}
          className="outline-none border-[1px] p-1"
          onChange={(e) => setjobname(e.currentTarget.value)}
        />

        <label htmlFor="jobname">Description</label>
        <input
          id="jobname"
          value={description}
          className="outline-none border-[1px] p-1"
          onChange={(e) => setDescription(e.currentTarget.value)}
        />

        <label htmlFor="jobname">Requirements</label>
        <input
          id="jobname"
          value={requirements}
          className="outline-none border-[1px] p-1"
          onChange={(e) => setRequirements(e.currentTarget.value)}
        />

        <button className="bg-black text-white rounded-md p-2" type="submit">
          Add posting
        </button>
      </form>
    </div>
  );
}
