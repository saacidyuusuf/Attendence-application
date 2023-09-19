"use client";
import React from "react";
import { useState, useEffect } from "react";
import supabase from "../components/supabase";
import Nav from "../components/Nav";
import ListStudent from "../components/ListStudent";

const Students = () => {
  const [students, setStudents] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("F4").select("*");
        if (error) {
          setError(error);
          setStudents(null);
        } else {
          setStudents(data);
          setError(null);
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setStudents(null);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="studentHaye">
        <h1 className="text-center">Student List</h1>
        {students ?
         <ListStudent  students={students} /> : 
         <span class="loader"></span>}
      </div>
    </>
  );
};

export default Students;

/* 
  <table class="table table-striped">
          <thead>
            <tr>Name</tr>
          </thead>
        </table>


         <h1>{student.id}</h1>
              <p>
                {student.name}
              </p>


               <table className="tableHaye">
                <thead>
                  <th>
                    name
                  </th>
                  <th>
                    id
                  </th>
                </thead>
{/*                 <tbody>
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.id}</td>
                  </tr>
                </tbody> }
                </table>
 */
