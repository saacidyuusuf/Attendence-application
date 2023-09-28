"use client";
import React from "react";
import { useEffect, useState } from "react";
import ClassNames from "./ClassNames";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Classes = () => {
  const [dataClass, setDataClass] = useState(null);
  const [loading, setloading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchClasses() {
      try {
        const { data, error } = await
         supabase.from("classes").select("*");

        if (error) {
          console.error("Error fetching users:", error.message);
          setDataClass(null);
        } else {
          setDataClass(data);
          console.log(data)
          setloading(false);
        }
      } catch (err) {
        console.log("err", err.message);
      }
    }
    fetchClasses();
  }, []);

  return (
    <div className="centerLoading">
    {loading ? (
      <span className="loader"></span>
    ) : dataClass && dataClass.length > 0 ? (
      <ClassNames classesData={dataClass} />
    ) : (
      <p>No data available</p>
    )}
  </div>
  );
};

export default Classes;
