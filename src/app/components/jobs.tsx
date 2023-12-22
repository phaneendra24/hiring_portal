import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase/config";

export default function Jobs() {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    const q = query(collection(database, "jobs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let items: any = [];
      querySnapshot.forEach((i) => {
        items.push({ ...i.data(), id: i.id });
      });
      setjobs(items);
    });
  }, []);

  console.log(jobs);

  return (
    <div className="flex flex-col gap-10 w-2/3">
      {jobs.map((i) => {
        return (
          <div className="p-5 bg-slate-100 w-full flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Role: {i.jobname}</h1>
              <h1>Description :{i.description}</h1>
              <p>Requirements :{i.requirements}</p>
            </div>

            <button className="bg-black text-white rounded-md h-fit px-3 py-1">
              Apply
            </button>
          </div>
        );
      })}
    </div>
  );
}
