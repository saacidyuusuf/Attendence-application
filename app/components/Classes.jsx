"use client";
import React, { useEffect, useState } from "react";
import ClassNames from "./ClassNames";
import { useUser } from "@supabase/auth-helpers-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import ListStudent from "./ListStudent";

const Classes = () => {
  const [dataClass, setDataClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const user = useUser();
  console.log(user);

  useEffect(() => {
    async function fetchClasses() {
      try {
        let query = supabase.from("classes").select("*");
        const { data, error } = await query;
        console.log("Data:", data);
        console.log("Error:", error);
        if (error) {
          console.error("Error fetching classes:", error.message);
          setDataClass(null);
        } else {
          setDataClass(data);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
    fetchClasses();
  }, [user]);
  return (
    <>
      <h1 className="dashText">Dashboard</h1>
      <div className="centerLoading">
      {loading ? (
          <span className="loader"></span>
        ) : dataClass !== null && dataClass.length > 0 ? (
          <ClassNames classesData={dataClass} />
        ) : (
          <p>No classes available</p>
        )}
      </div>
    </>
  );
};

export default Classes;

/* 
  {loading ? (
          <span className="loader"></span>
        ) : dataClass && dataClass.length > 0 ? (
          <ClassNames classesData={dataClass} />
        ) : (
          <p>No data available</p>
        )}


*/