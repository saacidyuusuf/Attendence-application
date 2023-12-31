"use client";
import React from "react";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import ListStudent from "../components/ListStudent";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Students = () => {
  const [students, setStudents] = useState(null);
  const [error, setError] = useState();
  const supabase = createClientComponentClient();
  const ClassIdentifier = 'f3students'

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("f3students").select("*");
        if (error) {
          setError(error);
          setStudents(null);
          console.log(error)
        } else {
          setStudents(data);
          setError(null);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setStudents(null);
      }
    }
    fetchData();
  }, []);

  const currentDate = new Date().toISOString().slice(0, 10);


  return (
    <>
      <Nav />
      <div className="studentHaye">
        <h1 className="text-center">Student List</h1>
        {students ?
         <ListStudent  students={students} classIdentifier={ClassIdentifier}  currentDate={currentDate} /> : 
         <span class="loader"></span>}
      </div>
    </>
  );
};

export default Students;

